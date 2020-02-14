import React, { Component } from "react";
import { Animated, StyleSheet, View, TouchableOpacity } from "react-native";
import { State } from "react-native-gesture-handler";
import { Block, Button, Text, BOttomSheet } from "../components";
import { SIZES, COLORS } from "../utils/theme";
import { categories } from "../data/index";

const HEADER_HEIGHT = 70;
const SNAP_POINTS_FROM_TOP = [20, SIZES.height * 0.9];
const USE_NATIVE_DRIVER = true;
export default class Analytics extends Component {
  constructor(props) {
    super(props);
    const START = SNAP_POINTS_FROM_TOP[0];
    const END = SNAP_POINTS_FROM_TOP[SNAP_POINTS_FROM_TOP.length - 1];

    this.state = {
      lastSnap: END
    };
  }
  render() {
    return (
      <Block>
        <Block primary flex={1}>
          <Text white>
            Feminist women love Eminem. "Chicka, chicka, chicka, Slim Shady, I'm
            sick of him. Look at him, walkin' around, grabbin' his
            you-know-what. Flippin' the you-know-who," "Yeah, but he's so cute
            though.". Yeah, I probably got a couple of screws up in my head
            loose. But no worse than what's goin' on in your parents' bedrooms.
          </Text>
        </Block>
        <Block paddingLeft={SIZES.base} paddingTop={SIZES.padding}>
          <Text primary subtitle>
            RECENT TRANSACTION
          </Text>
          {/* <FlatList /> */}
        </Block>
      </Block>
    );
  }
}
