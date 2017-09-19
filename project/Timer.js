import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, Button, View} from 'react-native';

/* Adapted from broken timer code here: https://codepen.io/seoh/pen/PPZYQy */

const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)


export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
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
          secondsElapsed: this.state.secondsElapsed + 1
        })
      , 1000);
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
        secondsElapsed: 0,
      });
    }

    render() {
      return (
        <View className="stopwatch">
          <Text className="stopwatch-timer">{formattedSeconds(this.state.secondsElapsed)}</Text>

          {(this.state.secondsElapsed === 0 ||
            this.incrementer === this.state.lastClearedIncrementer
            ? <Button className="start-btn" title='Start' onPress={this.handleStartClick}>start</Button>
            : <Button className="stop-btn" title='Stop' onPress={this.handleStopClick}>stop</Button>
          )}

          {(this.state.secondsElapsed !== 0 &&
            this.incrementer === this.state.lastClearedIncrementer
            ? <Button title='Reset' onPress={this.handleResetClick}>reset</Button>
            : null
          )}

        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#77f',
  },
});
