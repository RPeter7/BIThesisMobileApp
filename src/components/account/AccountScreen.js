import React from "react";
import { Text, View } from "react-native";
import { Input, Button, Header, Icon } from "react-native-elements";

const AccountScreen = () => {
   return (
      <View>
         <Header centerComponent={{ text: "Fiókod", style: { color: "#fff", fontSize: 18 } }} />
         <Text>AccountScreen</Text>
      </View>
   );
};

export default AccountScreen;
