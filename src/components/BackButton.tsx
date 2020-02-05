import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { images } from "../constants";
import { withNavigation } from "react-navigation";

const BackButton = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={images.back} style={{ height: 19, width: 20 }} />
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(BackButton);
