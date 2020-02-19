import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { Block, ServiceCard, Text } from "./";
import { categories } from "../data/index";
import {SIZES} from '../utils/theme'
const ServiceList = props => {
  const { service, category } = props;

  const renderService = ({ item }) => (
    <ServiceCard style={styles.serviceCardStyles} name={item.name} icon={item.icon} />
  );
  return (
    <Block marginTop={SIZES.padding}>
      <Text sfmedium size={SIZES.caption} gray2 transform="uppercase">
        {category}
      </Text>
      <FlatList
        numColumns={4}
        data={service}
        keyExtractor={(item, index) => `service-item-${index}`}
        renderItem={renderService}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  serviceCardStyles: {
    margin: SIZES.base * 2
  }
})


export default ServiceList;
