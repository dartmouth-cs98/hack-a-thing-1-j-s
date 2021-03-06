import React, { Component } from 'react';
import { AppRegistry, Text, Button, View, Alert, StyleSheet } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import Stopwatch from './Stopwatch';
import Clock from './Clock';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
          style={styles.tabViewMargins}
          renderTabBar={() => <DefaultTabBar />}
        >
          <Stopwatch tabLabel="Stopwatch" />
          <Clock tabLabel="Clock" />
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabViewMargins: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
