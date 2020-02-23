import React, { useState } from "react";
import { Block, Text, DropDown } from "../../components";
import { cards } from "../../data";
import { COLORS, SIZES } from "../../utils/theme";

const AddMoneyViaTransfer = () => {
  return (
    <Block>
      <Block
        paddingVertical={SIZES.padding * 3}
        paddingHorizontal={SIZES.padding}
      >
        <Block flex={0.4}>
          <Text sfregular tertiary size={SIZES.caption}>
            Transfer from your bank into the account number below to Top up your
            Rubeepay
          </Text>
        </Block>
        <Block>
          <Text sfregular primary size={SIZES.caption}>
            Account Number
          </Text>
          <Text
            sfregular
            tertiaryheight={SIZES.subtitle}
            spacing={1.4}
            size={SIZES.body}
          >
            9902046493
          </Text>
          <Text
            sfregular
            primary
            marginTop={SIZES.padding}
            size={SIZES.caption}
          >
            Account Name
          </Text>
          <Text sfregular tertiary height={SIZES.subtitle} size={SIZES.body}>
            Christopher Sani
          </Text>
          <Text
            sfregular
            primary
            marginTop={SIZES.padding}
            size={SIZES.caption}
          >
            Bank Name
          </Text>
          <Text sfregular height={SIZES.subtitle} tertiary size={SIZES.body}>
            Providus Bank
          </Text>
        </Block>
      </Block>
    </Block>
  );
};

export default AddMoneyViaTransfer;
