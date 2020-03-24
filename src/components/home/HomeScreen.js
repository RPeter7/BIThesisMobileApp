import React, { useState, useEffect } from "react";
import { Text, View, Dimensions } from "react-native";
import { Input, Button, Header, Icon } from "react-native-elements";
import { ProgressChart } from "react-native-chart-kit";
import agent from "../../app/api/agent";


const data = {
   labels: ["Swim", "Bike", "Run"], // optional
   data: [0.4, 0.6, 0.8]
};

const chartConfig = {
   backgroundGradientFrom: "rgb(192,192,192)",
   backgroundGradientFromOpacity: 0,
   backgroundColor: "rgb(169,169,169)",
   backgroundGradientToOpacity: 0.5,
   color: (opacity = 1) => `rgba(30,144,255, ${opacity})`,

   style: {
      borderRadius: 16
   }
};

const graphStyle = {
   margin: 5,
   ...chartConfig.style
};

const screenWidth = Dimensions.get("window").width;

const HomeScreen = () => {
   const [result, setResult] = useState(null);

   const getResult = async () => {
      const response = await agent.Test.testRequest();
      setResult(response);
      console.log(response)

   };

   useEffect(() => {
      getResult();
   }, []);

   return (
      <View>
         <Header
            centerComponent={{ text: "Üdvözöllek!", style: { color: "#fff", fontSize: 18 } }}
         />
         <ProgressChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            hideLegend={false}
            style={graphStyle}
         />
      </View>
   );
};

export default HomeScreen;
