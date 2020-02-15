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
const AddMoneyScreen = ({ navigation }) => {
  const [amountValue, onAmountChange] = useState("");

  const cards = [
    {
      label: "MasterCard ***2503",
      value: "45sdfdg7d879df8gd7"
    },
    {
      label: "MasterCard ***2593",
      value: "45sdfdg7d879df8gd7"
    },
    {
      label: "MasterCard ***2493",
      value: "45sdfdg7d879df8gd7"
    },
    {
      label: "MasterCard ***2513",
      value: "45sdfdg7d879df8gd7"
    }
  ];
  const views = [
    {
      id: 0,
      label: "View Card/ATM",
      activeIcon: "atmCard",
      inactiveIcon: "atmCardAlt",
      viewContent: () => (
        <Block paddingHorizontal={SIZES.base}>
          <Block center paddingVertical={SIZES.padding * 3}>
            <DropDown
              color={COLORS.muted}
              defaultLabel="Choose Card"
              items={cards}
            />
            <Text
              marginTop={SIZES.padding}
              muted
              sfregular
              size={SIZES.caption}
              height={17}
            >
              Choose a card or use the button below to Add a card
            </Text>
          </Block>
        </Block>
      )
    },
    {
      id: 1,
      label: "Via Bank Transfer",
      activeIcon: "university",
      inactiveIcon: "universityAlt",
      viewContent: () => (
        <Block>
          <Block
            paddingVertical={SIZES.padding * 3}
            paddingHorizontal={SIZES.padding}
          >
            <Block flex={0.4}>
              <Text sfregular tertiary size={SIZES.caption}>
                Transfer from your bank into the account number below to Top up
                your Rubeepay
              </Text>
            </Block>
            <Block>
              <Text sfregular primary size={SIZES.caption}>
                Account Number
              </Text>
              <Text
                sfregular
                tertiaryheight={SIZES.subtitle}
                spacing={1.4}
                size={SIZES.body}
              >
                9902046493
              </Text>
              <Text
                sfregular
                primary
                marginTop={SIZES.padding}
                size={SIZES.caption}
              >
                Account Name
              </Text>
              <Text
                sfregular
                tertiary
                height={SIZES.subtitle}
                size={SIZES.body}
              >
                Christopher Sani
              </Text>
              <Text
                sfregular
                primary
                marginTop={SIZES.padding}
                size={SIZES.caption}
              >
                Bank Name
              </Text>
              <Text
                sfregular
                height={SIZES.subtitle}
                tertiary
                size={SIZES.body}
              >
                Providus Bank
              </Text>
            </Block>
          </Block>
        </Block>
      )
    },
    {
      id: 2,
      label: "Via USSD Code",
      activeIcon: ["asterisk", "asterisk", "asterisk"],
      inactiveIcon: ["asteriskAlt", "asteriskAlt", "asteriskAlt"],
      viewContent: () => (
        <Block center marginTop={SIZES.padding}>
          <ScrollView style={{ flex: 1 }}>
            <Text gray2 sfregular size={SIZES.caption} height={SIZES.body}>
              Amount (N)
            </Text>
            <Input
              autoCorrect={false}
              width={154}
              center
              maxLength={16}
              keyboardType="number-pad"
              size={SIZES.h2}
              value={amountValue}
              placeholder={"0.00"}
              onChangeText={text => {
                onAmountChange(text);
              }}
            />
            <Block>
              <Text sfregular primary size={SIZES.caption}>
                Account Number
              </Text>
              <Text
                sfregular
                tertiaryheight={SIZES.subtitle}
                spacing={1.4}
                size={SIZES.body}
              >
                9902046493
              </Text>
            </Block>
          </ScrollView>
        </Block>
      )
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
