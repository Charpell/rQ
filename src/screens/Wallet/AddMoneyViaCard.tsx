import React, { useState } from "react";
import {
  Block,
  Text,
  DropDown,
  Input,
  Button,
  ForwardButton
} from "../../components";
import { cards } from "../../data";
import { COLORS, SIZES } from "../../utils/theme";

const AddMoneyViaCard = () => {
  const [amount, setAmount] = useState("100.00");

  return (
    <Block paddingHorizontal={SIZES.base}>
      <Block center paddingVertical={SIZES.padding * 3}>
        <Text gray2 size={SIZES.caption} sfregular>
          Amount (N)
        </Text>
        <Input
          keyboardType="number-pad"
          value={amount}
          onChangeText={text => setAmount(text)}
        />
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
      <Block center top>
        <Button radius width={239}>
          <Text center white sfregular>
            Confirm
          </Text>
          <ForwardButton />
        </Button>
      </Block>
    </Block>
  );
};

export default AddMoneyViaCard;
