import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./HomeNavigator";
import Transactions from "./TransactionNavigator";
import Wallet from "./WalletNavigator";
import Support from "./SupportNavigator";
import { SIZES, COLORS } from "../../utils/theme";
import { Text, BackButton } from "../../components";
import { navigation } from "../../constants";
import TransferScreen from '../../screens/Wallet/TransferScreen';

const TabBarComponent = props => <BottomTabBar {...props} />;

const { TAB_RES, headerStyles } = navigation;

const tabBarElevation = 3;

const Label = props => (
  <Text primary size={SIZES.base} center>
    {props.focused ? props.name : ""}
  </Text>
);

const Icon = props => {
  const { icon, focused, bgColor, fab, size, round, padding } = props;

  const btnStyles = StyleSheet.flatten([
    {
      height: icon.height,
      width: icon.width
    }
  ]);
  const containerStyles = StyleSheet.flatten([
    {
      backgroundColor: (bgColor && bgColor) || COLORS.white,
      borderWidth: padding,
      borderColor: COLORS.white,
      justifyContent: "center",
      alignItems: "center",
      width: size,
      height: size,
      padding: size * 0.7,
      marginBottom: size * 0.5,
      elevation: tabBarElevation * 0.5
    },
    round && { borderRadius: size }
  ]);
  return (
    <View style={fab && containerStyles}>
      <Image source={focused ? icon.active : icon.inactive} style={btnStyles} />
    </View>
  );
};
const TransferStack = createStackNavigator(
  {
    TransferScreen: {
      screen: TransferScreen,
      navigationOptions: {
        title: "Transfer",
      }
    }
  },
  { defaultNavigationOptions: { ...headerStyles } }
);
const BottomTab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions({ screenProps, navigation }) {
        const { theme } = screenProps;
        const { routeName } = navigation.state;
        return {
          tabBarLabel: ({ focused }) => {
            return <Label focused={focused} name={routeName} />;
          },
          tabBarIcon: ({ focused }) => (
            <Icon focused={focused} icon={TAB_RES.home} />
          )
        };
      }
    },
    Wallet: {
      screen: Wallet,
      navigationOptions({ screenProps, navigation }) {
        const { theme } = screenProps;
        const { routeName } = navigation.state;
        return {
          tabBarLabel: ({ focused }) => {
            return <Label focused={focused} name={routeName} />;
          },
          tabBarIcon: ({ focused }) => (
            <Icon focused={focused} icon={TAB_RES.wallet} />
          )
        };
      }
    },
    TransferScreen: {
      screen: TransferStack,
      navigationOptions({ screenProps, navigation }) {
        const { theme } = screenProps;
        const { routeName, index } = navigation.state;
        return {
          title: "Add Money",
          tabBarVisible: false,
          headerLeft: () => (<BackButton />),
          tabBarLabel: ({ focused }) => {
            return <Label />;
          },
          tabBarIcon: ({ focused }) => (
            <Icon
              focused={focused}
              icon={TAB_RES.addMoney}
              bgColor={COLORS.secondary}
              fab
              size={38}
              round
              padding={SIZES.base}
            />
          )
        };
      }
    },
    Transaction: {
      screen: Transactions,
      navigationOptions({ screenProps, navigation }) {
        const { theme } = screenProps;
        const { routeName } = navigation.state;
        return {
          tabBarLabel: ({ focused }) => {
            return <Label focused={focused} name={routeName} />;
          },
          tabBarIcon: ({ focused }) => (
            <Icon focused={focused} icon={TAB_RES.transactions} />
          )
        };
      }
    },
    Support: {
      // added the support navigator
      screen: Support,
      navigationOptions({ screenProps, navigation }) {
        const { theme } = screenProps;
        const { routeName } = navigation.state;
        return {
          tabBarLabel: ({ focused }) => {
            return <Label focused={focused} name={routeName} />;
          },
          tabBarIcon: ({ focused }) => (
            <Icon focused={focused} icon={TAB_RES.support} />
          )
        };
      }
    }
  },
  {
    initialRouteName: "Home",
    animationEnabled: true,
    swipeEnabled: false,
    navigationOptions: {
      headerShown: true,
    },
    tabBarComponent: props => <TabBarComponent {...props} />,
    tabBarOptions: {
      style: {
        overflow: "visible",
        borderWidth: 0,
        borderTopWidth: 0,
        elevation: tabBarElevation,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: tabBarElevation - 1 },
        shadowOpacity: 1,
        shadowRadius: tabBarElevation * 2
      },

      labelPosition: "below-icon",
      activeTintColor: COLORS.primary,
      inactiveTintColor: COLORS.inactiveTab // this value is from the XD files
    },
    defaultNavigationOptions:  {...headerStyles}
  }
);
export default BottomTab;
