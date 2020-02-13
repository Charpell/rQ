import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import { SIZES } from "../../utils/theme";
import { WalletTransactions } from "../../data";
import Text from "../../components/primary/Text";
import Block from "../../components/primary/Block";
import Button from "../../components/primary/Button";
import Transaction from "../../components/Transaction";
import ImageIcon from "../../components/primary/ImageIcon";

export default class WalletScreen extends Component {
  renderTransaction = ({ item }) => (
    <Transaction type={item.type} date={item.date} amount={item.amount} />
  );
  render() {
    return (
      <Block>
        <Block flex={0} primary style={styles.WalletBalanceContainer}>
          <Text tiny gray2 sfregular marginTop marginLeft>
            Wallet Balance
          </Text>
          <Text h1 sfsemibold marginTop marginBottom marginLeft white>
            N 25, 000
          </Text>
          <Text tiny gray2 sfregular marginTop marginLeft>
            Providus Bank
          </Text>
          <Block row>
            <Text caption medium marginLeft white>
              9902046493
            </Text>
            <Button tranparent>
              <ImageIcon name="copy" />
            </Button>
          </Block>
        </Block>
        <Block
          flex={0}
          paddingTop={SIZES.base * 7}
          row
          space="between"
          center
          middle
        >
          <Text light primary paddingLeft body>
            Recent Transactions
          </Text>
          <Button transparent paddingRight>
            <Text primary caption>
              View More
            </Text>
          </Button>
        </Block>
        <Block flex={1}>
          <FlatList
            data={WalletTransactions}
            keyExtractor={item => `trsanaction-item-${item.id}`}
            renderItem={this.renderTransaction}
          />
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
            onPress={() => this.props.navigation.navigate("AddMoneyScreen")}
          >
            <Block middle center>
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
            <Text small spacing={1} center light gray>
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
            onPress={() => this.props.navigation.navigate("TransferScreen")}
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
            <Text small spacing={1} center sfregular gray>
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
    height: SIZES.base * 20
  },
  FabContainer: {
    position: "absolute",
    top: SIZES.base * 18,
    width: SIZES.width
  }
});
