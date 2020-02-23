import React from "react";
import { TransactionsList, Block } from "../../components";
import { transactions } from "../../data";
const GrowWealthTransactions = () => {
  return (
    <Block background>
      <TransactionsList transactions={transactions} type="growwealth" />
    </Block>
  );
};

export default GrowWealthTransactions;
