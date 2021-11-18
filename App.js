import React,{Component} from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from "./screens/HomeScreen";
import WeekPayments from "./screens/WeekPayments";
import TodaysPayments from "./screens/TodaysPayments";
import OthersPayments from "./screens/OthersPayments";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

export default class App extends Component {
  render() {
    return(
      <AppContainer/>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  HomeScreen: {screen: HomeScreen},
  OthersPayments: {screen: OthersPayments},
  TodaysPayments: {screen: TodaysPayments},
  WeekPayments: {screen: WeekPayments},
  SignUpScreen: {screen: SignUpScreen},
  LoginScreen: {screen: LoginScreen},
})

const AppContainer = createAppContainer(switchNavigator);