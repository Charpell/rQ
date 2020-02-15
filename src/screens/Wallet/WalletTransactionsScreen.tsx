import React from "react";
import { FlatList } from "react-native";
import { Block, Transaction } from "../../components";
import { COLORS, SIZES } from "../../utils/theme";
import { WalletTransactions } from "../../data";

const WalletTransactionsScreen = props => {
  const { navigation } = props;

  const renderItem = ({ item }) => (
    <Transaction type={item.type} amount={item.amount} date={item.date} />
  );
  return (
    <Block color={COLORS.background} paddingHorizontal={SIZES.base}>
      <Block flex>
        <FlatList
          data={WalletTransactions}
          renderItem={renderItem}
          keyExtractor={(item, index) =>
            `transaction-id-${item.id}-list-item-${index}`
          }
        />
      </Block>
    </Block>
  );
};

export default WalletTransactionsScreen;
