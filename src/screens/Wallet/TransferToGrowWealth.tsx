import React, { useState } from "react";
import { ScrollView } from "react-native";
import {
  Block,
  Text,
  Input,
  Button,
  ForwardButton,
  Beneficiaries
} from "../../components";
import { SIZES } from "../../utils/theme";

const TransferToGrowWealth = () => {
  const [amountValue, onAmountChange] = useState("");
  const [accNumberValue, onAccNumberChange] = useState("");
  const [bankNameValue, onBankNameChange] = useState("");
  const [narrationValue, onNarrationChange] = useState("");
  return (
    <ScrollView>
      <Block width={SIZES.width} paddingVertical={SIZES.base}>
        <Text h1 center primary padding sflight>
          Coming Soon
        </Text>
      </Block>
    </ScrollView>
  );
};

export default TransferToGrowWealth;
