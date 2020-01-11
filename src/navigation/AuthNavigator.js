import React from 'react'
import { Image } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from '../screens/Authentication/LoginScreen'
import LandingPageScreen from '../screens/Authentication/LandingPageScreen'
import { SignUpScreen, VerifyPhoneNumber, UserDetailsScreen, SetPinScreen, FinalScreen, ResetScreen, VerifyResetPinScreen, SignInScreen } from '../screens'


export default createStackNavigator({
  LandingPageScreen,
  ResetScreen,
  UserDetailsScreen,

  SignUpScreen,
  
  SignInScreen,

  


  
  VerifyResetPinScreen,
  
  FinalScreen,
  SetPinScreen,
  VerifyPhoneNumber,

  
  LoginScreen,
  
}, {
  headerMode: 'none'
})