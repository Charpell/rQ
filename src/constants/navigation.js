import * as React from "react";
import images from "./images";
import { SIZES, COLORS } from "../utils/theme";
import ImageIcon from '../components/primary/ImageIcon';

// BottomTab resources
export const TAB_RES = {
  home: {
    active: images.homeAlt,
    inactive: images.home,
    height: 20,
    width: 18
  },
  wallet: {
    active: images.walletAlt,
    inactive: images.wallet,
    height: 18,
    width: 20
  },
  transactions: {
    active: images.receiptAlt,
    inactive: images.receipt,
    height: 20,
    width: 18
  },
  addMoney: {
    active: images.twoarrow,
    inactive: images.twoarrow,
    height: 24,
    width: 20
  },
  support: {
    active: images.userSquare,
    inactive: images.userSquare,
    height: 20,
    width: 20
  }
};

export const headerStyles = {
  headerStyle: {
    height: SIZES.base * 8,
    backgroundColor: COLORS.background || "white", // or 'white
    borderBottomColor: "transparent",
    elevation: 0 // for android
  },
  headerTintColor: COLORS.primary,
  headerBackImage: () => ( <ImageIcon name="back" />),
  headerLeftContainerStyle: {
    alignItems: "center",
    marginLeft: SIZES.base,
    paddingRight: SIZES.base
  },
  headerRightContainerStyle: {
    alignItems: "center",
    paddingRight: SIZES.base
  }
};

export default { TAB_RES, headerStyles };
