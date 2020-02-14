import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import { theme } from "../../constants";
const { COLORS } = theme;

import HomeScreen from "../../screens/Home/HomeScreen";
import AddMoneyScreen from "../../screens/Wallet/AddMoneyScreen";
import TransferScreen from "../../screens/Wallet/TransferScreen";
import { headerStyles } from "../../constants/navigation";
import AnalyticsScreen from "../../screens/Home/AnalyticsScreen";

const HomeScreens = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerShown: false
      })
    },
    TransferScreen: {
      screen: TransferScreen
    }
  },
  {
    defaultNavigationOptions: {
      ...headerStyles
    }
  }
);
const HomeNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreens
    },
    AnalyticsScreen: {
      screen: AnalyticsScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default HomeNavigator;
