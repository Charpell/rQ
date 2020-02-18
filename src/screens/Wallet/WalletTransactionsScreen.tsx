import React, { useState } from "react";
import { FlatList } from "react-native";
import {
  Block,
  Transaction,
  TransactionsList,
  Button,
  Text,
  ImageIcon
} from "../../components";
import { COLORS, SIZES } from "../../utils/theme";
import { WalletTransactions } from "../../data";

const WalletTransactionsScreen = props => {
  const { navigation } = props;
  const [transactionType, setTransactionType] = useState("all");

  const handleFilter = type => {
    setTransactionType(type);
  };
  const renderItem = ({ item }) => (
    <Transaction type={item.type} amount={item.amount} date={item.date} />
  );

  return (
    <Block color={COLORS.background}>
      <Block flex paddingHorizontal={SIZES.base}>
        <TransactionsList
          transactions={WalletTransactions}
          type={transactionType}
          limit={13}
        />
      </Block>
      <Block
        flex={0.1}
        white
        style={{
          borderTopRightRadius: SIZES.radius * 3,
          borderTopLeftRadius: SIZES.radius * 3
        }}
        shadow
        elevation={6}
        color={COLORS.white}
        height={SIZES.height * 0.1}
        padding={SIZES.padding}
        space="between"
        row
      >
        <Button
          highlight
          outlined={transactionType !== "all"}
          primary={transactionType === "all"}
          radius
          onPress={() => handleFilter("all")}
          paddingHorizontal
          width={44}
          // height={31}
          small
          marginRight
          center
          middle
        >
          <Text
            size={SIZES.base}
            white={transactionType === "all"}
            primary={transactionType !== "all"}
            center
          >
            All
          </Text>
        </Button>
        <Button
          primary={transactionType === "topup"}
          outlined={transactionType !== "topup"}
          onPress={() => handleFilter("topup")}
          width={52}
          radius
          marginRight
          small
        >
          <Text
            size={SIZES.base}
            white={transactionType === "topup"}
            primary={transactionType !== "topup"}
            center
          >
            Add Money
          </Text>
        </Button>
        <Button
          radius
          small
          width={72}
          marginRight
          primary={transactionType === "banktransfer"}
          outlined={transactionType !== "banktransfer"}
          onPress={() => handleFilter("banktransfer")}
        >
          <Text
            size={SIZES.base}
            white={transactionType === "banktransfer"}
            primary={transactionType !== "banktransfer"}
            center
          >
            Transfer Money
          </Text>
        </Button>
        <Block>
          <Button
            outlined
            radius
            width={38}
            small
            center
            middle
            style={{ alignSelf: "flex-end" }}
          >
            <ImageIcon name="alignCenter" />
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default WalletTransactionsScreen;
