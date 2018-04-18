import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA7u9YErkn0WQ2qr2jDUnFkzLhXO3ytfRM',
      authDomain: 'manager-16ec2.firebaseapp.com',
      databaseURL: 'https://manager-16ec2.firebaseio.com',
      projectId: 'manager-16ec2',
      storageBucket: 'manager-16ec2.appspot.com',
      messagingSenderId: '142956398312'
    };

    firebase.initializeApp(config);
  }
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
