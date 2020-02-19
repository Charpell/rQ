import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import { theme } from "../../constants";
const { COLORS } = theme;

import HomeScreen from "../../screens/Home/HomeScreen";
import { headerStyles } from "../../constants/navigation";
import AnalyticsScreen from "../../screens/Home/AnalyticsScreen";
import ServiceScreen from "../../screens/Home/ServiceScreen";
import AddMoneyScreen from "../../screens/Wallet/AddMoneyScreen";
import AddCardScreen from "../../screens/Wallet/AddCardScreen";
import WalletTransactionsScreen from '../../screens/Wallet/WalletTransactionsScreen';
import TransferScreen from '../../screens/Wallet/TransferScreen';
import WithdrawalScreen from '../../screens/Wallet/WithdrawalScreen';
const HomeScreens = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerShown: false
      })
    },
    ServiceScreen: {
      screen: ServiceScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Service Title"
      })
    },
    AddMoneyScreen: {
      screen: AddMoneyScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Add Money",
        };
      }
    },
    AddCardScreen: {
      screen: AddCardScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Add Card",
        };
      }
    },
      TransferScreen: {
        screen: TransferScreen,
        navigationOptions: ({ navigation }) => {
          return {
            title: "Transfer",
          };
        }
      },
      WalletTransactionsScreen: {
        screen: WalletTransactionsScreen,
        navigationOptions: ({ navigation }) => {
         
          return {
            title: "Wallet Transactions",
          }
        }
    },
    WithdrawalScreen: {
      screen: WithdrawalScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Withdraw Money"
      })
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
