import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import SupportScreen from "../screens/Support/SupportScreen";
import FaqScreen from "../screens/Support/FaqScreen";
import Report from "./ReportNavigator"
import { headerStyles } from "../constants/navigation";

const SupportNavigator = createStackNavigator(
  {
    SupportScreen: {
      screen: SupportScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Help Center",
        };
      }
    },
    Report: {
      screen: Report,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Report Issue",
        };
      }
    },
    FaqScreen
  },
  {
    initialRouteName: "SupportScreen",
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

export default SupportNavigator;
