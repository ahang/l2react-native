import React, { Component } from 'react';
import firebase from 'firebase';
import { Card, CardSection, Button, Input } from './common';


class LoginForm extends Component {
  state = { email: '', password: '' };

  onButtonPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password);
  }
  
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="abc@domain.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
            <Input
              label="Password"
              placeholder="password"
              secureTextEntry
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  textInputStyle: {

  }
}

export default LoginForm;
