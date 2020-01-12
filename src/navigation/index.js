import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'



import UserOnboarding from '../screens/Onboarding/UserOnboarding'
import AuthNavigator from './AuthNavigator'
import HomeNavigator from './HomeNavigator'
import LandingScreen from '../screens/LandingScreen'

const Screens = createSwitchNavigator({
  LandingScreen,

  HomeNavigator,

  AuthNavigator,
  UserOnboarding,
})

export default createAppContainer(Screens)