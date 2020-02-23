import React, { Component } from "react";
import { FlatList } from "react-native";
import { Text, Block, Transaction } from "../../components";
import { COLORS, SIZES } from "../../utils/theme";
import { transactions } from "../../data";
const AllTransactions = props => {
  const renderItem = ({ item }) => (
    <Transaction
      transaction={{ ...item }}
      type={item.type}
      amount={item.amount}
      date={item.date}
    />
  );
  return (
    <Block color={COLORS.background} paddingHorizontal={SIZES.base}>
      <Block flex>
        <FlatList
          data={transactions}
          renderItem={renderItem}
          keyExtractor={(item, index) =>
            `transaction-id-${item.id}-list-item-${index}`
          }
        />
      </Block>
    </Block>
  );
};

export default AllTransactions;
