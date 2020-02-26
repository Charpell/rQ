import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import UserOnboarding from "../screens/Onboarding/UserOnboarding";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeDrawer";
import LandingScreen from "../screens/LandingScreen";

const RootNavigator = createSwitchNavigator({
  HomeNavigator,
  LandingScreen,
  UserOnboarding,
  AuthNavigator
});

export default createAppContainer(RootNavigator);
