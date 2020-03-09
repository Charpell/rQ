import React, { useState } from "react";
import { Text, Block, Button, ImageIcon, Input } from "../../components";
import { moneyCards } from "../../data";
import { COLORS, SIZES } from "../../utils/theme";
const AddCardScreen = () => {
  return (
    <Block color={COLORS.background} paddingHorizontal={SIZES.padding}>
      <Text caption primary paddingHorizontal marginVertical>
        Add your card now securely
      </Text>
      <Block paddingHorizontal={SIZES.padding} middle>
        <Input placeholder="Card Number" />
      </Block>
      <Block row space="evenly" paddingHorizontal={SIZES.padding} middle>
        <Input placeholder="Expiry Date" />
        <Input placeholder="CVV" />
      </Block>
      <Block>
        <Button center middle radius={SIZES.radius * 3}>
          <Text white center>
            Confirm Test
          </Text>
        </Button>
      </Block>
      <Block></Block>
    </Block>
  );
};

export default AddCardScreen;
