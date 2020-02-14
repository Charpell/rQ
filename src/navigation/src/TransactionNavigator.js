import React from "react";
import { Image } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { Entypo } from "@expo/vector-icons";

import { images, theme } from "../../constants";
const { SIZES, COLORS } = theme;
import {navigation} from '../../constants'

import TransactionsScreen from "../../screens/Transactions/TransactionsScreen";
import { headerStyles } from '../../constants/navigation';
import BackButton from '../../components/BackButton'

const activeColor = COLORS.primary;
const inactiveColor = COLORS.secondary;

const TransactionNavigator = createStackNavigator({
  TransactionsScreen: {
    screen: TransactionsScreen,
 
  }
},
  {
    defaultNavigationOptions: {
      ...headerStyles
    }
  }
);

export default TransactionNavigator;