import React, { Component } from 'react';
import { AppRegistry, Text, Button, View, Alert, StyleSheet } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigblue}>Hello world!</Text>
        <Button
          onPress={() => { Alert.alert('You tapped the button!')}}
          title="Press Me"
        />
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
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
