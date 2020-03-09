import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";

import BottomTabs from "./src";
import SideBar from "../components/SideBar";
import { SIZES } from "../utils/theme";
import { CloseButton } from "../components";
import TransactionSummary from "../screens/Transactions/TransactionSummary";

export default createDrawerNavigator(
  {
    BottomTabs
  },
  {
    contentComponent: props => <SideBar {...props} />,
    drawerWidth: SIZES.width * 0.7,
    drawerBackgroundColor: "transparent",
    contentOptions: {
      activeBackgrundColor: "transparent"
    }
  }
);
