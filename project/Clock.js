import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View} from 'react-native';


export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curTime : new Date().toLocaleString()
    };
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bigred}>Clock</Text>
        <Text style={styles.timerText}>{this.state.curTime}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timerText: {
    fontFamily: 'Cochin',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigred: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
