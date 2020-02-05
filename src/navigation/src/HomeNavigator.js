import React from "react";
import { Image } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { MaterialIcons, Feather } from "@expo/vector-icons";

import { images, theme } from "../../constants";
const { SIZES, COLORS } = theme;

import HomeScreen from "../../screens/Home/HomeScreen";
import TransferScreen from "../../screens/Home/TransferScreen";

const activeColor = COLORS.primary;
const inactiveColor = COLORS.inactiveTab;

const HomeNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerMode: "none",
      header: null
    })
  },
  TransferScreen: {
    screen: TransferScreen
  }
});

export default HomeNavigator;
