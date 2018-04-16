import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDsy89QLWjPcta-30rH6w5afhLgNk-jPys',
      authDomain: 'authentication-a4047.firebaseapp.com',
      databaseURL: 'https://authentication-a4047.firebaseio.com',
      projectId: 'authentication-a4047',
      storageBucket: 'authentication-a4047.appspot.com',
      messagingSenderId: '504231294552'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App;
