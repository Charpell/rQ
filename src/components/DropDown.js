import React from "react";
import { Picker, StyleSheet } from "react-native";
import { Block, ImageIcon } from "./";
import { COLORS, SIZES } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";

const DropDown = props => {
  const {
    items,
    defaultLabel,
    containerStyle,
    width,
    itemStyle,
    height,
    color,
    mode
  } = props;
  const dropDownWrapperStyle = StyleSheet.flatten([
    {
      backgroundColor: COLORS.white,
      borderRadius: 11,
      paddingHorizontal: 17,
      // paddingVertical: 17,
      height: height || SIZES.padding * 2,
      width: width || SIZES.width * 0.9,
      fontColor: COLORS.muted
    },
    { ...containerStyle }
  ]);
  const dropDownStyle = StyleSheet.flatten([
    {
      backgroundColor: "transparent",
      width: width || SIZES.width * 0.8,
      fontColor: COLORS.muted,
    }
  ]);
  const dropDownItemStyle = StyleSheet.flatten([{}, { ...itemStyle }]);
  return (
    <Block style={dropDownWrapperStyle} flex={0}>
      <Picker
        mode={(mode && mode) || "dropdown"}
        itemStyle={dropDownItemStyle}
        style={dropDownStyle}
        {...props}
      >
        <Picker.Item color={color} label={defaultLabel} value="" />
        {items.map((item, index) => (
          <Picker.Item
            // color={color}
            key={index}
            label={item.label}
            value={item.value}
          />
        ))}
      </Picker>
      <Ionicons
        style={{
          position: "absolute",
          alignItems: "flex-end",
          top: 19,
          right: 18
        }}
        name="ios-arrow-down"
        size={11}
        color={COLORS.muted}
      />
    </Block>
  );
};

export default DropDown;
