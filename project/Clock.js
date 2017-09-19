import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View} from 'react-native';

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curTime : new Date()
    };
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date()
      })
    },1000)
  }

  render() {
    return (
      <View style={this.state.curTime.getHours() > 6 && this.state.curTime.getHours() < 18
          ? styles.containerDay : styles.containerNight} >
        <Text style={styles.timerText}>{this.state.curTime.toLocaleTimeString()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timerText: {
    fontFamily: 'Cochin',
    fontSize: 40,
    fontWeight: 'bold',
  },
  containerDay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  containerNight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow',
  },
});
