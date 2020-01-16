import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'

import SourceNavigator from './src'
import SideBar from '../components/SideBar'

export default createDrawerNavigator({
  SourceNavigator
}, {
  contentComponent: props => <SideBar {...props} />,
  drawerWidth: 269,
  drawerBackgroundColor: 'transparent',
  contentOptions: {
    activeBackgrundColor: 'transparent'
  }
}, {
  headerMode: "none"
})