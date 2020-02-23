import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import WalletScreen from "../../screens/Wallet/WalletScreen";
import AddMoneyScreen from "../../screens/Wallet/AddMoneyScreen";
import AddCardScreen from "../../screens/Wallet/AddCardScreen";
import WalletTransactionsScreen from '../../screens/Wallet/WalletTransactionsScreen';
import TransferScreen from '../../screens/Wallet/TransferScreen';
import WithdrawalScreen from '../../screens/Wallet/WithdrawalScreen';
import TransferToMyBank from '../../screens/Wallet/TransferToMyBank'
import { headerStyles } from "../../constants/navigation";

const WalletNavigator = createStackNavigator(
  {
    WalletScreen: {
      screen: WalletScreen,
      navigationOptions: {
        title: "My Wallet"
      }
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
    TransferToMyBank: {
      screen: TransferToMyBank,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Transfer"
        }
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
    initialRouteName: "WalletScreen",
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

export default WalletNavigator;
