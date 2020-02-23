import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Block, Text, Input } from "../../components";
import { cards } from "../../data";
import { COLORS, SIZES } from "../../utils/theme";
const AddMoneyViaUssd = () => {
  const [amount, setAmount] = useState("");
  return (
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
          value={amount}
          placeholder={"0.00"}
          onChangeText={text => {
            setAmount(text);
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
  );
};

export default AddMoneyViaUssd;
