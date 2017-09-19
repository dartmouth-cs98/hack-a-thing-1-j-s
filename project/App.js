import React, { Component } from 'react';
import { AppRegistry, Text, Button, View, Alert, StyleSheet } from 'react-native';
import Timer from './Timer';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigred}>Press to start the timer!</Text>
        <Timer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigred: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30
  },
});
