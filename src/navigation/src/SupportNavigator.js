import React from "react";

import { createStackNavigator } from "react-navigation-stack";
import SupportScreen from "../../screens/Support/SupportScreen";
import { headerStyles } from "../../constants/navigation";

const SupportNavigator = createStackNavigator(
  {
    SupportScreen
  },
  {
    defaultNavigationOptions: {
      ...headerStyles
    }
  }
);

export default SupportNavigator;
