import React from 'react'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import Home from './HomeNavigator'
import Transaction from './TransactionNavigator'
import Wallet from './WalletNavigator'
import Support from './SupportNavigator'
import { MaterialIcons } from '@expo/vector-icons'

const TabBarComponent = props => <BottomTabBar {...props} />;


export default createBottomTabNavigator({
  Home: { 
    screen: Home,
    navigationOptions({screenProps}) {
      const { theme } = screenProps
      return {
        tabBarLabel: "",
        tabBarIcon: ({focused}) => {
          return (
            <MaterialIcons 
              name="local-movies" 
              color={focused ? 'red' : 'yellow'} 
              size={28} 
            />
          ) 
        }
      }
    } 
  },
  Transaction: { 
    screen: Transaction,
    navigationOptions({screenProps}) {
      const { theme } = screenProps
      return {
        tabBarLabel: "",
        tabBarIcon: ({focused}) => {
          return (
            <MaterialIcons 
              name="local-movies" 
              color={focused ? 'red' : 'yellow'} 
              size={28} 
            />
          ) 
        }
      }
    } 
  },
  Wallet: { 
    screen: Wallet,
    navigationOptions({screenProps}) {
      const { theme } = screenProps
      return {
        tabBarLabel: "",
        tabBarIcon: ({focused}) => {
          return (
            <MaterialIcons 
              name="local-movies" 
              color={focused ? 'red' : 'yellow'} 
              size={28} 
            />
          ) 
        }
      }
    } 
  },
},
{
  initialRouteName: 'Wallet',
  animationEnabled: true,
  swipeEnabled: false,
  tabBarOptions: {
    style: { 
      backgroundColor: 'transparent',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    indicatorStyle: {
      height: 0
    },
    showIcon: true,
    showLabel: false
  }
})