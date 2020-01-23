import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Block } from "./components";
import Navigation from "./navigation";
import { newArry } from "./constants/images";

import AuthState from "./contex/auth/authState";
import { VendorState } from "./contex";
console.disableYellowBox = true;

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AuthState>
          <VendorState>
            <Navigation />
          </VendorState>
        </AuthState>
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync(newArry()),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      regular: require("./assets/fonts/SFregular.ttf"),
      displayBlack: require("./assets/fonts/SFdisplayblack.otf"),
      ultra: require("./assets/fonts/SFultra.otf"),
      thin: require("./assets/fonts/SFthin.otf"),
      semibold: require("./assets/fonts/SFsemibold.otf"),
      medium: require("./assets/fonts/SFmedium.otf"),
      light: require("./assets/fonts/SFlight.otf"),
      heavy: require("./assets/fonts/SFheavy.otf"),
      bold: require("./assets/fonts/SFbold.otf")
    })
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
