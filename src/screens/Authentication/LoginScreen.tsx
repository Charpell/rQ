import React, { Component } from 'react'
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native'

import { Button, Block, Input, Text } from '../../components';
import { theme } from '../../constants';


class Login extends Component {
  state = {
    phoneNumber: '08066098146',
    password: '123456',
    errors: [],
    loading: false
  }

  handleLogin = () => {
    const { navigation , authError} = this.props;
    const { phoneNumber, password } = this.state
    const errors = []

    Keyboard.dismiss();
    // this.setState({ loading: true })

    if (!errors.length) {
      // this.props.signIn(this.state)
      //   .then(() => {
          navigation.replace('HomeScreen')
        // })
    }
  }


  render() {
    const { navigation, authError } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;

    return (
      <KeyboardAvoidingView style={styles.login} behaviour="padding">
        <Block padding={[ 0, 50 ]}>
          <Text h1 bold>Login</Text>

          <Block middle>
            <Input
              label="Phone Number"
              error={hasErrors('phoneNumber')}
              style={[styles.input, hasErrors('phoneNumber')]}
              defaultValue={this.state.phoneNumber}
              onChangeText={text => this.setState({ phoneNumber: text })}
              keyboardType={'phone-pad'}
            />
            <Input
              secure
              label="Password"
              error={hasErrors('password')}
              style={[styles.input, hasErrors('password')]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button gradient onPress={() => this.handleLogin()} style={{ marginVertical: 20 }}>
              {loading ?
                <ActivityIndicator size="small" color="white" /> : 
                <Text bold white center>Login</Text>
              }
            </Button>

            <Button withoutFeedback onPress={() => navigation.navigate('Forgot')}>
              <Text gray2 caption center style={{ textDecorationLine: 'underline', marginTop: 20 }}>
                Forgot your password?
              </Text>
            </Button>
          </Block>
          
        </Block>
      </KeyboardAvoidingView>
    )
  }
}


const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.COLORS.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  },
  hasErrors: {
    borderBottomColor: theme.COLORS.accent,
  }
})




export default Login