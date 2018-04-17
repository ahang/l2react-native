import React, { Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA7u9YErkn0WQ2qr2jDUnFkzLhXO3ytfRM',
      authDomain: 'manager-16ec2.firebaseapp.com',
      databaseURL: 'https://manager-16ec2.firebaseio.com',
      projectId: 'manager-16ec2',
      storageBucket: 'manager-16ec2.appspot.com',
      messagingSenderId: '142956398312'
    }
    
    firebase.initializeApp(config);
  }

  return () {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    )
  }
}

export default App;