import React, { useState } from "react";
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
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Block background paddingHorizontal={SIZES.padding}>
      <Text primary size={SIZES.caption} height={SIZES.body}>
        Select a Withdrawal Method
      </Text>

      <Block marginTop={SIZES.base * 5}>
        <Input size={SIZES.caption} placeholder="Enter Amount" />
        <Input
          size={SIZES.caption}
          keyboardType="phone-pad"
          placeholder="Recipeint Phone Number"
          value={phoneNumber}
          onCangeText={text => setPhoneNumber(text)}
        />
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
