import React from "react";
import { withNavigation } from "react-navigation";
import { ImageIcon, Button } from "./";
import { SIZES } from "../utils/theme";

const MenuButton = props => {
  const { navigation, width, height } = props;
  return (
    <Button
      transparent
      padding={width / 2}
      height={height * 2}
      onPress={() => navigation.openDrawer()}
    >
      <ImageIcon name="menu" />
    </Button>
  );
};

export default withNavigation(MenuButton);
