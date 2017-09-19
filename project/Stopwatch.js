import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, Button, View} from 'react-native';

/* Adapted from broken timer code here: https://codepen.io/seoh/pen/PPZYQy */

/*
* Minutes are allowed to be incremented indefinitely
* Format is Minutes, Seconds, Hundredths of seconds
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
      <View style={styles.container}>
        <Text style={styles.bigred}>Start stopwatch!</Text>
        <Text style={styles.timerText}>{formattedSeconds(this.state.milliSecondsElapsed)}</Text>

        {(this.state.milliSecondsElapsed === 0 ||
          this.incrementer === this.state.lastClearedIncrementer
            ? <Button color='mediumblue' title='Start' onPress={this.handleStartClick} />
            : <Button color='mediumblue' title='Stop' onPress={this.handleStopClick} />
        )}

        {(this.state.milliSecondsElapsed !== 0 &&
          this.incrementer === this.state.lastClearedIncrementer
            ? <Button color='maroon' title='Reset' onPress={this.handleResetClick} />
          : <Button color='maroon' title='Reset' onPress={this.handleResetClick} disabled={true} />
        )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  timerText: {
    fontFamily: 'Cochin',
    fontSize: 50,
    marginBottom: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
    backgroundColor: 'lightslategray'
  },
  bigred: {
    color: 'maroon',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
});
