/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import App from './app';

class AwesomeProject extends Component{

  render()
  {
    return (
      <App />
    )
  }

}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
