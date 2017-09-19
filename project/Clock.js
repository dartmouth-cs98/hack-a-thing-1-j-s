import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, Button, View} from 'react-native';

/* Adapted from broken timer code here: https://codepen.io/seoh/pen/PPZYQy */

/*
* Minutes are allowed to be incremented indefinitely
* Format is Minutes, Seconds, Milliseconds
*/
const formattedSeconds = (mSec) =>
  ('0' + Math.floor(mSec / 60000)).slice(-2) + ':' + ('0' + (Math.floor(mSec % 60000 / 1000))).slice(-2) + '.' + ('0' + mSec / 10).slice(-2);


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
      <View style={styles.container} className="stopwatch">
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
