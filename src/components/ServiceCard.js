import React from "react";
import { withNavigation } from "react-navigation";
import { Button, Text, ImageIcon, Card } from "./";
import { SIZES } from "../utils/theme";

const ServiceCard = props => {
  const { navigation, name, icon, screen, style } = props;

  return (
    <Button
      white
      width={70}
      height={67}
      style={style}
      radius={SIZES.cardRadius}
      middle
      center
      padding
      onPress={() => navigation.navigate(screen, { data: icon, name: name })}
    >
      <Card padding={0}  radius={SIZES.cardRadius} center middle>
        <ImageIcon name={icon} />
      </Card>
      <Text center tertiary sfregular size={SIZES.small} height={SIZES.caption}>
        {name}
      </Text>
    </Button>
  );
};

export default withNavigation(ServiceCard);
