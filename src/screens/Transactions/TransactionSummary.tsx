import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Block, Text, Card, Transaction, ImageIcon } from "../../components";
import { SIZES, COLORS } from "../../utils//theme";
import transactionTypes from "../../constants/transactions";
import { fullAirtimeTransaction } from "../../data";
import CirIcon from "../../components/CirIcon";

const TransactionSummmary = props => {
  const { navigation } = props;

  const id = navigation.getParam("id");
  const [transaction, setTransaction] = useState(fullAirtimeTransaction);
  const { title, iconName } = transactionTypes[`${transaction.type}`];

  return (
    <Block background>
      <Text tertiary size={SIZES.caption} paddingHorizontal>
        If you have any trouble, report issue to receive our support
      </Text>
      <Block
        scroll
        middle
        marginVertical={SIZES.padding}
        padding={SIZES.base * 2}
      >
        <Block>
          <Block
            primary
            height={SIZES.base * 6}
            row
            padding
            center
            style={styles.recieptContainer}
          >
            <Block>
              <Text white sfmedium size={SIZES.body} marginRight>
                {title}
              </Text>
            </Block>
            <Block>
              <CirIcon color="white" size={34}>
                <ImageIcon name={iconName} />
              </CirIcon>
            </Block>

            <Block>
              <Text gray2 sfmedium size={SIZES.small}>
                Transaction ID
              </Text>
              <Text sfmedium size={SIZES.body} white>
                {transaction.id}
              </Text>
            </Block>
          </Block>
          <Block white paddingHorizontal={SIZES.base}>
            <Block space="between" row paddingVertical={SIZES.base * 2}>
              <Text sfmedium muted size={SIZES.caption}>
                Amount
              </Text>
              <Text sfmedium size={SIZES.caption} tertiary>
                N {transaction.amount}
              </Text>
            </Block>
            <Block space="between" row paddingVertical={SIZES.base * 2}>
              <Text sfmedium muted size={SIZES.caption}>
                Date
              </Text>
              <Text sfmedium size={SIZES.caption} tertiary>
                {transaction.date}
              </Text>
            </Block>
            <Block space="between" row paddingVertical={SIZES.base * 2}>
              <Text sfmedium muted size={SIZES.caption}>
                Status
              </Text>
              <Text sfmedium size={SIZES.caption} tertiary>
                {transaction.status}
              </Text>
            </Block>
            <Block space="between" row paddingVertical={SIZES.base * 2}>
              <Text sfmedium muted size={SIZES.caption}>
                Service
              </Text>
              <Text sfmedium size={SIZES.caption} tertiary>
                {transaction.service}
              </Text>
            </Block>
            <Block space="between" row paddingVertical={SIZES.base * 2}>
              <Text sfmedium muted size={SIZES.caption}>
                Sender
              </Text>
              <Text sfmedium size={SIZES.caption} tertiary>
                {transaction.sender}
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  recieptContainer: {
    borderTopLeftRadius: SIZES.btnRadius,
    borderTopRightRadius: SIZES.btnRadius
  }
});

export default TransactionSummmary;
