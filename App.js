/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Image
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';
import FirstScreen from './screens/FirstScreen'
import SecondScreen from './screens/SecondScreen'
import ThirdScreen from './screens/ThirdScreen';

var Navigation = TabNavigator({
  Tab1: { screen : FirstScreen},
  Tab2: { screen : SecondScreen},
  Tab3: {screen : ThirdScreen}

}, {
    tabBarPosition:'bottom',
    swipeEnabled:true,  
    tabBarOptions: { 
        activeTintColor: '#2c3e50',
        activeBackgroundColor: '#2c3e50',
        inactiveTintColor: 'white',
        inactiveBackgroundColor:'#2c3e50',
        labelStyle: {
          fontSize: 16,
        }
    }

}
);
export default Navigation;