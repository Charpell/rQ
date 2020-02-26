import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import AccountScreen from "../../screens/Account/AccountScreen";
import { headerStyles } from "../../constants/navigation";


const AccountNavigator = createStackNavigator(
  {
    AccountScreen: {
      screen: AccountScreen,
      navigationOptions: ({ navigation }) => ({
        title: "User Profile"
      })
    }
  },
  {
    initialRouteName: "AccountScreen",
    defaultNavigationOptions: {
      ...headerStyles
    },
    navigationOptions: ({ navigation }) => {
      const { index } = navigation.state
      let tabBarVisible = true
      if (index > 0) tabBarVisible = false
      return {
        headerShown: true,
        tabBarVisible
      }
    }
  }
);

export default AccountNavigator;
