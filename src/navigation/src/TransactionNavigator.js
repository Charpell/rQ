import React from 'react'
import { Image } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack'
import { Entypo } from '@expo/vector-icons'

import { images, theme } from '../../constants'
const { SIZES, COLORS } = theme

import TransactionScreen from '../../screens/Transactions/TransactionScreen'

const activeColor = COLORS.primary;
const inactiveColor = COLORS.secondary;

const TransactionNavigator = createStackNavigator({
  TransactionScreen
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

TransactionNavigator.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Entypo 
      name="clock"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
}

export default TransactionNavigator