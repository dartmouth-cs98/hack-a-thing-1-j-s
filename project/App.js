import React, { Component } from 'react';
import { AppRegistry, Text, Button, View, Alert, StyleSheet } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import Stopwatch from './Stopwatch';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView 
          renderTabBar={() => <DefaultTabBar />} 
        >
          <Stopwatch tabLabel="Stopwatch" />
          <Text tabLabel="Clock">Clock</Text>
        </ScrollableTabView>
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
});
