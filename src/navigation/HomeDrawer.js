import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";

import BottomTabs from "./src";
import Support from "./SupportNavigator";
import SideBar from "../components/SideBar";
import { CloseButton } from "../components";
import TransactionSummary from "../screens/Transactions/TransactionSummary";

export default createDrawerNavigator(
  {
    BottomTabs,
    Support
  },
  {
    contentComponent: props => <SideBar {...props} />,
    drawerWidth: 269,
    drawerBackgroundColor: "transparent",
    contentOptions: {
      activeBackgrundColor: "transparent"
    }
  }
);
