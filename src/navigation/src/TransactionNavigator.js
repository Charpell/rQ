import React from "react";
import { Image } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { Entypo } from "@expo/vector-icons";

import { images, theme } from "../../constants";
const { SIZES, COLORS } = theme;

import TransactionsScreen from "../../screens/Transactions/TransactionsScreen";

const activeColor = COLORS.primary;
const inactiveColor = COLORS.secondary;

const TransactionNavigator = createStackNavigator({
  TransactionsScreen
});

export default TransactionNavigator;
