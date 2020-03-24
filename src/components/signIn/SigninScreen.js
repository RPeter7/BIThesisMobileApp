import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Input, Button, Header, Icon } from "react-native-elements";
import Spacer from "../common/Spacer";
import NavLink from "../common/NavLink";

const SigninScreen = ({ navigation }) => {
   return (
      <View style={styles.mainContainer}>
         <Header
            centerComponent={{ text: "Jelentkezz be!", style: { color: "#fff", fontSize: 18 } }}
         />
         <Spacer />
         <View style={styles.container}>
            <Input
               label="Add meg az email cimed!"
               placeholder="cim@cim.com"
               rightIcon={<Icon style={{ marginRight: 20 }} name="mail" size={24} color="black" />}
            />
            <Spacer />
            <Input
               label="Add meg a jelszavad!"
               placeholder="jelszo"
               rightIcon={<Icon name="lock" size={24} color="black" />}
            />
            <Spacer>
               <NavLink text="Nincs fiokod? Keszits egyet!" routeName="Signup" />
               <Button title="Bejelentkezes" onPress={() => navigation.navigate("mainFlow")} />
            </Spacer>
         </View>
      </View>
   );
};

SigninScreen.navigationOptions = {
   headerShown: false
};

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1
   },
   container: {
      margin: 7
   }
});

export default SigninScreen;
