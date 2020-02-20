import React from "react";
import { Image, StyleSheet } from "react-native";
import icons from "../../constants/icons";

const ImageIcon = props => {
  const { name, style, children } = props;
  const { icon, height, width, absolute, top, right, bottom, left } = icons[
    `${name}`
  ];
  const iconStyles = StyleSheet.flatten(
    {
      height: height,
      width: width
    },
    absolute && { position: absolute },
    top && {top},
    right && {right},
    bottom && { bottom},
    left && {left},
    style
  );
  return (
    <Image source={icon} style={iconStyles} resizeMode="contain" {...props}>
      {children}
    </Image>
  );
};

export default ImageIcon;
