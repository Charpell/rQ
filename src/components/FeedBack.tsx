import React from "react";
import { Modal, StyleSheet, TouchableHighlight } from "react-native";
import { Text, Block, Button, ImageIcon } from "./";
import { SIZES, COLORS } from "../utils/theme";

const FeedBack = props => {
  const {
    navigation,
    icon,
    visible,
    closeModal,
    title,
    message,
    btnText
  } = props;

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <Block>
        <Block center middle gray>
          <Block
            style={styles.modal}
            height={332}
            width={328}
            flex={0}
            white
            space="between"
            paddingHorizontal={SIZES.padding}
            paddingVertical={SIZES.padding}
          >
            <Block middle center>
              <ImageIcon name={icon} />
            </Block>
            <Block middle center flex={0}>
              <Text center tertiary sfmedium size={SIZES.body}>
                {title}
              </Text>
              <Text center color={COLORS.muted2} sfregular size={SIZES.caption}>
                {message}
              </Text>
            </Block>

            <Block center>
              <Button
                marginTop={SIZES.padding}
                center
                width={103}
                radius
                color={COLORS.accent}
                onPress={closeModal}
              >
                <Text center white sfregular size={SIZES.caption}>
                  {btnText}
                </Text>
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
      {/* <Block style={styles.overlay}></Block> */}
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    opacity: 0.4,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  modal: {
    borderRadius: SIZES.btnRadius
  }
});

export default FeedBack;
