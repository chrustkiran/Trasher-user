import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';



export default class App extends React.Component {
  render() {
    return (
    <Stack/>
    );
  }
}


const Stack = createStackNavigator({
  Login: { screen: LoginScreen },
  Main : {screen : MainScreen}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});