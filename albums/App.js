import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/header';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
      </View>
    );
  }
}

