import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import LogIn from './screens/LogIn'

export default class App extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <LogIn/>
      </View>
    );
  }
}
