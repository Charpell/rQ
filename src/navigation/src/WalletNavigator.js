import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import WalletScreen from "../../screens/Wallet/WalletScreen";
import AddMoneyScreen from "../../screens/Wallet/AddMoneyScreen";
import AddCardScreen from "../../screens/Wallet/AddCardScreen";
import { headerStyles } from "../../constants/navigation";
import { BackButton } from "../../components";

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
          headerLeft: <BackButton />,
          tabBarVisible: false

        };
      }
    },
    AddCardScreen: {
      screen: AddCardScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Add Card",
          tabBarVisible: false

        };
      }
    }
  },
  {
    initialRouteName: "WalletScreen",
    defaultNavigationOptions: {
      ...headerStyles
    },
    navigationOptions: {
      headerShown: true
    }
  }
);

export default WalletNavigator;
