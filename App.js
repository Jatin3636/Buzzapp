import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import facebook from './screens/fb';
import instagram from './screens/in';

export default class App extends Component {
  render() {
    return <Appcontainer />;
  }
}

const tabNavigator = createBottomTabNavigator({
  facebook: { screen: facebook },
  
  instagram: { screen: instagram },
  
});
const Appcontainer = createAppContainer(tabNavigator);
