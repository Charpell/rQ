import React from "react";
import { FlatList } from "react-native";
import { Transaction, Text, Block } from "./";
import { COLORS } from "../utils/theme";

const TransactionsList = props => {
  /*
   * Render a list of transaction that can be filtered using a transaction criteria
   *
   * - Usage
   *
   *  import {TransactionsList} from './components'
   *  ...
   *
   *  const App = () => {
   *    const data = [
   *      {
   *        id: 0,
   *        type: 'airtime',
   *        amount: 200903,
   *        data: 23456787653423567
   *      }
   *    ]
   *    return (
   *      <TransactionsList transactions={data} type="airtime" limit={10} />
   *    )
   *
   *  }
   *
   */

  const { transactions, wallet, limit } = props;

  const type = props.type || "all"

  let transactionsCopy = transactions;

  if (limit) transactionsCopy = transactionsCopy.slice(0, limit - 1);

  if (type !== "all")  transactionsCopy = transactionsCopy.filter(transaction => transaction.type === type);

  const renderTransaction = ({ item }) => (
    <Transaction type={item.type} amount={item.amount} date={item.date} />
  );

  return (
    <Block>
      <FlatList
        data={transactionsCopy}
        keyExtractor={(item, index) =>
          `transaction-item-${item.id}-list-item-${index}`
        }
        renderItem={renderTransaction}
      />
    </Block>
  );
};

export default TransactionsList;
