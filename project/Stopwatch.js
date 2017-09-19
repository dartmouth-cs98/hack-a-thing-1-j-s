import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, Button, View} from 'react-native';

/* Adapted from broken timer code here: https://codepen.io/seoh/pen/PPZYQy */

/*
* Minutes are allowed to be incremented indefinitely
* Format is Minutes, Seconds, Milliseconds
*/
const formattedSeconds = (mSec) =>
  ('0' + Math.floor(mSec / 60000)).slice(-2) + ':' + ('0' + (Math.floor(mSec % 60000 / 1000))).slice(-2) + '.' + ('0' + mSec / 10).slice(-2);


export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      milliSecondsElapsed: 0,
      lastClearedIncrementer: null
    };
    this.incrementer = null;
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleStartClick() {
    this.incrementer = setInterval( () =>
      this.setState({
        milliSecondsElapsed: this.state.milliSecondsElapsed + 10
      })
    , 10);
  }

  handleStopClick() {
    clearInterval(this.incrementer);
    this.setState({
      lastClearedIncrementer: this.incrementer
    });
  }

  handleResetClick() {
    clearInterval(this.incrementer);
    this.setState({
      milliSecondsElapsed: 0,
    });
  }

  render() {
    return (
      <View style={styles.container} className="stopwatch">
        <Text style={styles.bigred}>Start stopwatch!</Text>
        <Text className="stopwatch-timer" style={styles.timerText}>{formattedSeconds(this.state.milliSecondsElapsed)}</Text>

        {(this.state.milliSecondsElapsed === 0 ||
          this.incrementer === this.state.lastClearedIncrementer
            ? <Button className="start-btn" title='Start' onPress={this.handleStartClick}>start</Button>
            : <Button className="stop-btn" title='Stop' onPress={this.handleStopClick}>stop</Button>
        )}

        {(this.state.milliSecondsElapsed !== 0 &&
          this.incrementer === this.state.lastClearedIncrementer
            ? <Button title='Reset' onPress={this.handleResetClick}>reset</Button>
            : null
        )}

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
