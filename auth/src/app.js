import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDsy89QLWjPcta-30rH6w5afhLgNk-jPys',
      authDomain: 'authentication-a4047.firebaseapp.com',
      databaseURL: 'https://authentication-a4047.firebaseio.com',
      projectId: 'authentication-a4047',
      storageBucket: 'authentication-a4047.appspot.com',
      messagingSenderId: '504231294552'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        )
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App;
