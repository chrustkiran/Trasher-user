import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';

export default class MainScreen extends React.Component {

  static navigationOptions = {
    title: 'Main',
    headerStyle :{ backgroundColor : '#145a32', height : 50
       , },
  };


  
  render() {
    const name = this.props.navigation.getParam('name');

    return (
    <View style={styles.container}>
       <Text>This is {name}'s Profile!</Text>
    
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
