import React from 'react';
import { setNavigator } from './src/app/common/navigationRef';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/components/signIn/SigninScreen';
import SignupScreen from './src/components/signUp/SignupScreen';
import HomeScreen from './src/components/home/HomeScreen';
import AccountScreen from './src/components/account/AccountScreen';

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen
  }),
  mainFlow: createBottomTabNavigator({
    //Search: SearchScreen,
    Home: HomeScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App ref={(navigator) => {
      setNavigator(navigator);
    }}/>
  )
};

