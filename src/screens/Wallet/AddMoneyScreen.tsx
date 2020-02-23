import React, { useState } from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";
import {
  Text,
  Block,
  Button,
  Input,
  TabedView,
  DropDown
} from "../../components";
import { moneyCards } from "../../data";
import { COLORS, SIZES } from "../../utils/theme";

import { Ionicons } from "@expo/vector-icons";
import AddMoneyViaCard from "./AddMoneyViaCard";
import AddMoneyViaTransfer from "./AddMoneyViaTransfer";
import AddMoneyViaUssd from "./AddMoneyViaUssd";
const AddMoneyScreen = ({ navigation }) => {
  const views = [
    {
      id: 0,
      label: "View Card/ATM",
      activeIcon: "atmCard",
      inactiveIcon: "atmCardAlt",
      viewContent: () => <AddMoneyViaCard />
    },
    {
      id: 1,
      label: "Via Bank Transfer",
      activeIcon: "university",
      inactiveIcon: "universityAlt",
      viewContent: () => <AddMoneyViaTransfer />
    },
    {
      id: 2,
      label: "Via USSD Code",
      activeIcon: ["asterisk", "asterisk", "asterisk"],
      inactiveIcon: ["asteriskAlt", "asteriskAlt", "asteriskAlt"],
      viewContent: () => <AddMoneyViaUssd />
    }
  ];
  return (
    <Block color={COLORS.background}>
      <Text caption primary paddingHorizontal marginVertical>
        Top up your Rubeepay from multiple sources
      </Text>
      <Block flex={1}>
        <TabedView views={views} />
      </Block>

      <Button
        secondary
        shadow
        radius={SIZES.base}
        paddingHorizontal={SIZES.base * 2}
        style={{
          position: "absolute",
          bottom: SIZES.height * 0.05,
          right: 32
        }}
        onPress={() => navigation.navigate("AddCardScreen")}
      >
        <Ionicons
          name={Platform.OS === "ios" ? "ios-add" : "md-add"}
          size={16}
          color="white"
        />
      </Button>
    </Block>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  view: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray"
  }
});

export default AddMoneyScreen;
