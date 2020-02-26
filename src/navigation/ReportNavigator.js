import React from "react";

import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import { SIZES, COLORS } from "../utils/theme";

import Pos from "../screens/Support/Pos";
import OtherIssues from "../screens/Support/OtherIssues";


import { CloseButton } from "../components";
import { headerStyles } from "../constants/navigation";

const ReportTab = createMaterialTopTabNavigator(
  {
    Pos: {
      screen: Pos,
      navigationOptions: ({ navigation }) => {
        return {
          title: "POS Issues"
        };
      }
    },
    OtherIssues: {
      screen: OtherIssues,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Other Issues"
        };
      }
    }
  },
  {
    initialRouteName: "Pos",
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

const ReportNavigator = createStackNavigator(
  {
    ReportScreen: {
      screen: ReportTab,
      navigationOptions: {
        title: "Transactions",
        headerShown: false
      }
    }
  },
  { mode: "modal", defaultNavigationOptions: { ...headerStyles } }
);
export default ReportNavigator;