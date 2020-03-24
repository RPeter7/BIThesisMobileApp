import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Input, Button, Header, Icon, ButtonGroup } from "react-native-elements";
import Spacer from '../common/Spacer';
import NavLink from "../common/NavLink";

const SignupScreen = ({ navigation }) => {
    const buttons = ['Fogyas', 'Sulymegtartas']
    
    return (
        <View style={styles.mainContainer}>
            <Header
                centerComponent={{ text: "Regisztralj!", style: { color: "#fff", fontSize: 18 } }}
            />
            <Spacer />
                <ScrollView >
                    <Input
                        label="Hogy hívnak?"
                        placeholder="Kovács János"
                        rightIcon={
                            <Icon
                                style={{ marginRight: 20 }}
                                name="person"
                                size={24}
                                color="black"
                            />
                        }
                    />
                    <Spacer />
                    <Input
                        label="Mi az email címed?"
                        placeholder="cim@cim.com"
                        rightIcon={
                            <Icon
                                style={{ marginRight: 20 }}
                                name="mail"
                                size={24}
                                color="black"
                            />
                        }
                    />
                    <Spacer />
                    <Input
                        label="Mi legyen a jelszavad?"
                        placeholder='jelszo'
                        secureTextEntry
                        rightIcon={
                            <Icon
                                name="lock"
                                size={24}
                                color="black"
                            />
                        }
                    />
                    <Spacer />
                    <Input
                        label="Add meg újra a jelszavad!"
                        placeholder='jelszo'
                        secureTextEntry
                        rightIcon={
                            <Icon
                                name="lock"
                                size={24}
                                color="black"
                            />
                        }
                    />
                    <Spacer />
                    <Spacer >
                        <NavLink text='Mar van fiokod? Lepj be!' routeName='Signin' />
                        <Button title="Tovabb" onPress={() => navigation.navigate('SignupSecond')} />
                    </Spacer>
                </ScrollView>

        </View>
    )
};

SignupScreen.navigationOptions = {
   headerShown: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    goalText: {
        marginLeft: 10,
        marginBottom: 5,
        fontWeight: "bold",
        fontSize: 16,
        color: 'gray'
    }
});

export default SignupScreen;