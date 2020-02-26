import React from "react";
import { withNavigation } from "react-navigation";

import { SIZES, COLORS } from "../utils/theme";

import Block from "./primary/Block";
import Text from "./primary/Text";
import Button from "./primary/Button";
import CirIcon from "./CirIcon";
import ImageIcon from "./primary/ImageIcon";
import { transactionTypes } from "../constants";

const Transaction = props => {
  const { navigation, type, date, amount, transaction } = props;
  const { title, iconName } = transactionTypes[`${type}`];

  return (
    <Button
      transparent
      padding={0}
      margin={0}
      onPress={() =>
        navigation.navigate("TransactionSummary", {
          id: transaction.id,
          type: type
        })
      }
      nativeFeedback={true}
    >
      <Block row space="between" middle center padding={SIZES.base}>
        <CirIcon size={22} color="white">
          <ImageIcon name={iconName} />
        </CirIcon>
        <Block padding={SIZES.base}>
          <Text tertiary sfmedium height={14} size={12} spacing={0}>
            {title}
          </Text>
          <Text muted tiny gray light>
            {date}
          </Text>
        </Block>
        <Text tertiary sfmedium height={14} size={12} spacing={0}>
          {amount}
        </Text>
      </Block>
    </Button>
  );
};

export default withNavigation(Transaction);

Transaction.defaultProps = {
  type: "",
  date: "",
  amount: ""
};
