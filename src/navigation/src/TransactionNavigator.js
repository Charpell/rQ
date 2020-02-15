import React from "react";
import { Image } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { Entypo } from "@expo/vector-icons";

import { SIZES, COLORS } from "../../utils/theme";
import { navigation } from "../../constants";

import AllTransactions from "../../screens/Transactions/AllTransactions";
import SavingsTransactions from "../../screens/Transactions/SavingsTransactions";
import GrowWealthTransactions from "../../screens/Transactions/GrowWealthTransactions";
import { headerStyles } from "../../constants/navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import BackButton from "../../components/BackButton";

const TransactionsTab = createMaterialTopTabNavigator(
  {
    AllTransactions: {
      screen: AllTransactions,
      navigationOptions: ({ navigation }) => {
        return {
          title: "All"
        };
      }
    },
    SavingsTransactions: {
      screen: SavingsTransactions,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Savings"
        };
      }
    },
    GrowWealthTransactions: {
      screen: GrowWealthTransactions,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Grow Wealth"
        };
      }
    }
  },
  {
    initialRouteName: "AllTransactions",
    swipeEnabled: true,
    tabBarOptions: {
      upperCaseLabel: false,
      labelStyle: {
        color: COLORS.tertiary,
        marginBottom: 0,
      },
      indicatorStyle: {
        backgroundColor: COLORS.primary,
      },
      tabStyle: {
        paddingBottom: 0
      },
      style: {
        backgroundColor: COLORS.background
      }
    },
    defaultNavigationOptions: {
      ...headerStyles
    },
    navigationOptions: {
      headerShown: true
    }
  }
);

const TransactionNavigator = createStackNavigator(
  {
    TransactionsScreen: {
      screen: TransactionsTab,
      navigationOptions: {
        title: "Transactions"
      }
    }
  },
  { defaultNavigationOptions: { ...headerStyles } }
);
export default TransactionNavigator;
