import React from "react";
import { Image } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import { images, theme } from "../../constants";
const { SIZES, COLORS } = theme;

import WalletScreen from "../../screens/Wallet/WalletScreen";
import AddMoneyScreen from "../../screens/Wallet/AddMoneyScreen";

const activeColor = COLORS.primary;
const inactiveColor = COLORS.secondary;

const WalletNavigator = createStackNavigator(
  {
    WalletScreen: {
      screen: WalletScreen,
      navigationOptions: {
        title: "My Wallet"
      }
    },
    AddMoneyScreen
  },
  {
    initialRouteName: "WalletScreen"
  }
);

export default WalletNavigator;
