import React from "react";

import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import { SIZES, COLORS } from "../../utils/theme";

import AllTransactions from "../../screens/Transactions/AllTransactions";
import GrowWealthTransactions from "../../screens/Transactions/GrowWealthTransactions";
import TransactionSummary from "../../screens/Transactions/TransactionSummary";

import { CloseButton } from "../../components";
import { headerStyles } from "../../constants/navigation";

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
    scrollEnabled: false,
    pressColor: COLORS.primary,
    tabBarOptions: {
      upperCaseLabel: true,
      labelStyle: {
        color: COLORS.tertiary,
        marginBottom: 0,
        paddingBottom: 0
      },
      indicatorStyle: {
        backgroundColor: COLORS.primary
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
    },
    TransactionSummary: {
      screen: TransactionSummary,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Transaction Summary',
          headerLeft: <CloseButton />,
          headerShown: true
        }
      }
    }
  },
  { mode: "modal", defaultNavigationOptions: { ...headerStyles } }
);
export default TransactionNavigator;
