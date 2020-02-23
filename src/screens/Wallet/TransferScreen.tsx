import React, { useState } from "react";
import {
  TabedView,
  Block,
  Text,
  Button,
  CirIcon,
  ImageIcon
} from "../../components";
import { COLORS, SIZES } from "../../utils/theme";
import TransferToBankAccount from "./TransferToBankAccount";
import TransferToUser from "./TransferToUser";
import TransferToGrowWealth from "./TransferToGrowWealth";

const TransferScreen = props => {
  const { navigation } = props;
  const renderBeneficiaries = ({ item }) => (
    <Button height={52} width={54} marginRight={11} white radius={14}>
      <Block center padding middle>
        <CirIcon color={COLORS.inactiveTab} size={18}>
          <ImageIcon name="universityAlt" style={{ height: 10, width: 9 }} />
        </CirIcon>
      </Block>
      <Block center padding middle>
        <Text tertiary sfregular size={SIZES.base}>
          {item.name}
        </Text>
      </Block>
    </Button>
  );
  const views = [
    {
      id: 0,
      label: "Bank Account",
      activeIcon: "university",
      inactiveIcon: "universityAlt",
      viewContent: () => <TransferToBankAccount />
    },
    {
      id: 1,
      label: "Rubeepay User",
      activeIcon: "users",
      inactiveIcon: "usersAlt",
      viewContent: () => <TransferToUser />
    },
    {
      id: 2,
      label: "Grow Wealth",
      activeIcon: "gold",
      inactiveIcon: "goldAlt",
      viewContent: () => <TransferToGrowWealth />
    }
  ];
  return (
    <Block color={COLORS.background}>
      <Text primary sfregular size={SIZES.caption} paddingLeft>
        Choose where you wish to transfer money to
      </Text>
      <Block>
        <TabedView views={views} />
      </Block>
    </Block>
  );
};
export default TransferScreen;
