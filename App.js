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
  StatusBar
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';


import CenaPrincipal from './src/components/CenaPrincipal';

import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';

export default class App extends Component {
  render() {
    return (
      <Navigator initialRoute={{ id: 'a' }}
        renderScene={(route, navigator) => {
          if (route.id === 'a') {
            return (<CenaPrincipal navigator={navigator} />);
          }
          if (route.id === 'b') {
            return (<CenaClientes navigator={navigator} />);
          }
          if (route.id === 'c') {
            return (<CenaContatos navigator={navigator} />);
          }
        }}
      />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
