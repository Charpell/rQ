import React from "react";
import {} from "react-native";
import {
  Block,
  Text,
  Button,
  ForwardButton,
  Input,
  DropDown
} from "../../components";
import { SIZES, COLORS } from "../../utils/theme";
import { cards } from "../../data";
const WithdrawalScreen = () => {
  return (
    <Block background paddingHorizontal={SIZES.padding}>
      <Text primary size={SIZES.caption} height={SIZES.body}>
        Select a Withdrawal Method
      </Text>

      <Block marginTop={SIZES.base * 5}>
        <Input placeholder="Enter Amount" />
        <Input keyboardType="phone-pad" placeholder="Recipeint Phone Number" />
        <DropDown items={cards} defaultLabel="Select Payment Method" />
      </Block>
      <Block marginTop={SIZES.base * 5}>
        <Button radius>
          <Text center white sfregular size={SIZES.caption}>
            Confirm
          </Text>
          <ForwardButton />
        </Button>
      </Block>
    </Block>
  );
};

export default WithdrawalScreen;
