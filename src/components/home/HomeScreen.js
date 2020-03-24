import React from "react";
import { Text, View } from "react-native";
import { Input, Button, Header, Icon } from "react-native-elements";

const HomeScreen = () => {
   return (
      <View>
         <Header centerComponent={{ text: "Üdvözöllek!", style: { color: "#fff", fontSize: 18 } }} />
         <Text>HomeScreen</Text>
      </View>
   );
};

export default HomeScreen;
