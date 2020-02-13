import React from "react";
import { Image, StyleSheet } from "react-native";
import  icons  from '../../constants/icons'

const ImageIcon = props => {
  const {
    name,
    style,
    children,
  } = props
  const { icon, height, width } = icons[`${name}`]
  const iconStyles = StyleSheet.flatten(
    {
      height: height,
      width: width
    },
    style
  )
  return (
    <Image
      source={icon}
      style={iconStyles}
      resizeMode="contain"
      {...props}
    >
      {children}
    </Image>
  );
};


export default ImageIcon;
