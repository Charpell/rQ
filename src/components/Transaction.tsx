import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { SIZES, COLORS } from "../utils/theme";
import { images } from "../utils";
import Text from "./primary/Text";
import Block from "./primary/Block";
import Button from "./primary/Button";
import CirIcon from "./CirIcon";
import ImageIcon from "./primary/ImageIcon";
import { transactionTypes } from "../constants";

const Transaction = ({ type, date, amount }) => {
  const { title, iconName } = transactionTypes[`${type}`];

  return (
    <Block row space="between" middle center padding={SIZES.base}>
      <CirIcon size={22} color="white">
        <ImageIcon name={iconName} />
      </CirIcon>
      <Block padding={SIZES.base}>
        <Text>{title}</Text>
        <Text muted tiny gray light>
          {date}
        </Text>
      </Block>
      <Text flex={1}>{amount}</Text>
    </Block>
  );
};

export default Transaction;

Transaction.defaultProps = {
  type: null,
  date: null,
  amount: null
};
