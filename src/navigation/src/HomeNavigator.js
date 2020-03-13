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
import DataSubscribeScreen from '../../screens/Service/DataSubscribe'
import CableSubscribeScreen from '../../screens/Service/CableSubscribe'
import ElectricitySubscribeScreen from '../../screens/Service/ElectricitySubscribe'
import VerifyServiceScreen from '../../screens/Service/VerifyService'
import AirtimeServiceScreen from '../../screens/Service/AirtimeSubscribe'
import SettingsScreen from '../../screens/Home/Side/SettingsScreen'
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
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Settings",
        };
      }
    },
    DataSubscribeScreen: {
      screen: DataSubscribeScreen,
      navigationOptions: ({ navigation }) => ({
        headerShown: false
      })
    },
    CableSubscribeScreen: {
      screen: CableSubscribeScreen,
      navigationOptions: ({ navigation }) => ({
        headerShown: false
      })
    },
    ElectricitySubscribeScreen: {
      screen: ElectricitySubscribeScreen,
      navigationOptions: ({ navigation }) => ({
        headerShown: false
      })
    },
    VerifyServiceScreen: {
      screen: VerifyServiceScreen,
      navigationOptions: ({ navigation }) => ({
        headerShown: false
      })
    },
    AirtimeServiceScreen: {
      screen: AirtimeServiceScreen,
      navigationOptions: ({ navigation }) => ({
        headerShown: false
      })
    },
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
