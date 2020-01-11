import React from 'react'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import Home from './HomeNavigator'
import Transaction from './TransactionNavigator'
import Wallet from './WalletNavigator'
import Support from './SupportNavigator'

const TabBarComponent = props => <BottomTabBar {...props} />;


export default createBottomTabNavigator({
  Home,
  Transaction,
  Wallet,
  Support
},
{
  tabBarComponent: props => (
    <TabBarComponent {...props} style={{ borderTopColor: '#605F60', paddingTop: 10 }} />
  ),
})