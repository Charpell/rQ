import React, { Component } from "react";
import { StyleSheet, Image, FlatList } from "react-native";
import { SIZES, COLORS } from "../../utils/theme";
import { images } from "../../utils";
import { WalletTransactions } from "../../data";
import Text from "../../components/primary/Text";
import Block from "../../components/primary/Block";
import Button from "../../components/primary/Button";
import Card from "../../components/primary/Card";
import { TouchableOpacity } from "react-native-gesture-handler";

const TransactionComponent = props => {
  return (
    <Block row space="between" middle>
      <Block padding={10}>
        <Text>{props.type}</Text>
        <Text caption gray light>
          {props.date}
        </Text>
      </Block>
      <Text height={SIZES.base * 7} paddingRight>
        {props.amount}
      </Text>
    </Block>
  );
};
export default class WalletScreen extends Component {
  render() {
    return (
      <Block>
        <Block primary style={styles.WalletBalanceContainer}>
          <Text small marginTop marginLeft white>
            Wallet Balance
          </Text>
          <Text h1 bold marginTop marginBottom marginLeft white>
            N 25, 000
          </Text>
          <Text small light marginTop marginLeft white>
            Providus Bank
          </Text>
          <Block row>
            <Text caption medium marginLeft white>
              9902046493
            </Text>
            <Button tranparent></Button>
          </Block>
        </Block>
        <Block
          flex={0}
          paddingTop={SIZES.base * 7}
          marginBottom={SIZES.base * 2}
          row
          space="between"
        >
          <Text light primary paddingLeft subtitle>
            Recent Transactions
          </Text>
          <Button transparent paddingRight height={SIZES.subtitle}>
            <Text primary>View More</Text>
          </Button>
        </Block>
        <Block flex={1} paddingBottom={SIZES.base * 5}>
          <FlatList
            data={WalletTransactions}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TransactionComponent
                type={item.type}
                date={item.date}
                amount={item.amount}
              />
            )}
          />
        </Block>
        <Block row style={styles.FabContainer} space="around" center middle>
          <Button
            white
            height={72}
            style={styles.Fab}
            paddingHorizontal
            marginRight
            onPress={() => this.props.navigation.navigate("AddMoneyScreen")}
          >
            <Text caption light gray>
              Add Money
            </Text>
          </Button>

          <Button
            white
            height={72}
            flex={0.5}
            paddingHorizontal
            marginRight
            style={styles.Fab}
          >
            <Text caption light gray>
              Transfer Money
            </Text>
          </Button>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  WalletBalanceContainer: {
    height: SIZES.base * 20,
    flex: 0
  },
  FabContainer: {
    position: "absolute",
    top: SIZES.base * 15,
    width: SIZES.width,
    flex: 0,
  },
  Fab: {
    position: 'relative',
    flex: 0.3,
    alignContent: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.1,
    shadowRadius: 11,
    elevation: 12,
    borderRadius: 20,
  },
});
