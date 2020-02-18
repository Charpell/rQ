import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { SIZES } from "../../utils/theme";
import { WalletTransactions } from "../../data";
import Text from "../../components/primary/Text";
import Block from "../../components/primary/Block";
import Button from "../../components/primary/Button";
import { Transaction, TransactionsList } from "../../components";
import ImageIcon from "../../components/primary/ImageIcon";

const WalletScreen = props => {
  const renderTransaction = ({ item }) => (
    <Transaction type={item.type} date={item.date} amount={item.amount} />
  );
  const WalletTransactionsBrief = WalletTransactions.slice(6);
  const { navigation } = props;
  return (
    <Block>
      <Block flex={0} primary style={styles.WalletBalanceContainer}>
        <Text tiny gray2 sfregular marginTop marginLeft>
          Wallet Balance
        </Text>
        <Text h1 sfsemibold height={30} marginTop marginBottom marginLeft white>
          N 25, 000
        </Text>
        <Block middle>
          <Text tiny gray2 sfregular marginTop marginLeft>
            Providus Bank
          </Text>
          <Block row center flex={0}>
            <Text
              caption
              sfregular
              spacing={2.4}
              size={SIZES.caption}
              marginLeft
              white
            >
              9902046493
            </Text>
            <Button tranparent center middle paddingHorizontal={SIZES.base}>
              <ImageIcon name="copy" />
            </Button>
          </Block>
        </Block>
      </Block>
      <Block
        flex={0}
        paddingTop={SIZES.base * 11}
        row
        space="between"
        center
        middle
      >
        <Text
          light
          gray2
          paddingLeft
          size={SIZES.caption}
          transform="uppercase"
        >
          Recent Transactions
        </Text>
        <Button
          transparent
          paddingRight
          onPress={() => navigation.navigate("WalletTransactionsScreen")}
        >
          <Text primary sfmedium size={SIZES.caption} paddingHorizontal>
            View More
          </Text>
        </Button>
      </Block>
      <Block flex={1}>
        <TransactionsList transactions={WalletTransactionsBrief} limit={6} />
      </Block>
      <Block row style={styles.FabContainer} middle>
        <Button
          white
          flex={0.4}
          height={SIZES.base * 10}
          width={107}
          shadow
          center
          middle
          radius={14}
          paddingHorizontal
          paddingVertical
          marginHorizontal
          onPress={() => navigation.navigate("AddMoneyScreen")}
        >
          <Block middle center highlight>
            <ImageIcon
              name="addCircle"
              style={{
                position: "absolute",
                top: 10
              }}
            />
            <ImageIcon
              style={{
                position: "absolute",
                top: 17
              }}
              name="add"
            />
          </Block>
          <Text
            sfregular
            size={SIZES.small}
            spacing={0.1}
            height={SIZES.caption}
            center
            tertiary
          >
            Add Money
          </Text>
        </Button>

        <Button
          white
          flex={0.4}
          height={SIZES.base * 10}
          width={107}
          shadow
          center
          middle
          radius={14}
          paddingHorizontal
          paddingVertical
          marginHorizontal
          onPress={() => navigation.navigate("TransferScreen")}
        >
          <Block middle center paddingHorizontal={40}>
            <ImageIcon
              style={{
                position: "absolute",
                top: 4
              }}
              name="moneyInsertArrow"
            />
            <ImageIcon
              name="moneyInsert"
              style={{
                position: "absolute",
                top: 14
              }}
            />
          </Block>
          <Text
            sfregular
            size={SIZES.small}
            spacing={0.1}
            height={SIZES.caption}
            center
            tertiary
          >
            Transfer Money
          </Text>
        </Button>
      </Block>
    </Block>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  WalletBalanceContainer: {
    height: SIZES.base * 20
  },
  FabContainer: {
    position: "absolute",
    top: SIZES.base * 18,
    width: SIZES.width
  }
});
