import React from 'react'
import { Image } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack'
import { MaterialIcons } from '@expo/vector-icons'

import { images, theme } from '../../constants'
const { SIZES, COLORS } = theme

import HomeScreen from '../../screens/Home/HomeScreen'
import TransferScreen from '../../screens/Home/TransferScreen'

const activeColor = COLORS.primary;
const inactiveColor = COLORS.secondary;

const HomeNavigator = createStackNavigator({
  HomeScreen,
  TransferScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      height: SIZES.base * 4,
      backgroundColor: 'white', // or 'white
      borderBottomColor: "transparent",
      elevation: 0, // for android
    },
    headerBackImage: <Image source={require('../../assets/icons/back.png')} />,
    headerBackTitle: null,
    headerLeftContainerStyle: {
      alignItems: 'center',
      marginLeft: SIZES.base * 2,
      paddingRight: SIZES.base,
    },
    headerRightContainerStyle: {
      alignItems: 'center',
      paddingRight: SIZES.base,
    },
  }
})

HomeNavigator.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <MaterialIcons 
      name="home"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
}

export default HomeNavigator