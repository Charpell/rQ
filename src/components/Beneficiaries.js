import React from "react";
import { FlatList } from "react-native";
import { savedBeneficiaries } from "../data";
import Block from "./primary/Block";
import Button from "./primary/Button";
import Text from "./primary/Text";
import CirIcon from "./CirIcon";
import ImageIcon from "./primary/ImageIcon";
import { SIZES, COLORS } from "../utils/theme";

const Beneficiaries = () => {
  
  const renderBeneficiaries = ({ item }) => (
    <Block>
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
    </Block>
  );


  return (
    <Block>
      <Block row space="between" center>
        <Text gray2 sfregular size={SIZES.caption}>
          Choose beneficiary
        </Text>
        <Button transparent>
          <Text primary size={SIZES.caption}>
            Find beneficiary
          </Text>
        </Button>
      </Block>
      <Block middle paddingHorizontal={SIZES.base}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={savedBeneficiaries}
          keyExtractor={(item, index) =>
            `saved-beneficiary-id-${item.id}-list-item-${index}`
          }
          renderItem={renderBeneficiaries}
        />
      </Block>
    </Block>
  );
};

export default Beneficiaries;
