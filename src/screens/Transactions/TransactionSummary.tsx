import React from "react";
import {} from "react-native";
import { Block, Text, Card, Transaction } from "../../components";
import { SIZES } from "../../utils//theme";
const TransactionSummmary = ({ navigation }) => {
  const transaction = JSON.parse(navigation.getParam("transaction"));
  return (
    <Block background>
      <Text tertiary size={SIZES.caption} paddingHorizontal>
        If you have any trouble, report issue to receive our support
      </Text>
      <Block center paddingHorizontal={SIZES.base * 2}>
        <Block outlined>
          <Block primary flex={0} height={SIZES.base * 6}>
            <Text white>{transaction.amount}</Text>
          </Block>
          <Block primary></Block>
        </Block>
      </Block>
    </Block>
  );
};

export default TransactionSummmary;
