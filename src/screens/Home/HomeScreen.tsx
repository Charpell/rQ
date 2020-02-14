import React, { useContext, useEffect, useState } from "react";
import { View, SafeAreaView, Modal } from "react-native";
import { MenuButton, Avatar, FavouriteService, Text } from "../../components";
import Card from "../../components/Card";
import { theme } from "../../constants";
import Analytics from "../../components/Analytics";

const { COLORS } = theme;

const HomeScreen = ({ navigation }) => {
  const [analyticsVisible, setAnalyticsVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <MenuButton navigation={navigation} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 0.1
          }}
        >
          <View style={{ marginVertical: 20 }}>
            <Text primary sfsemibold h3>
              Hi, Christopher Sani
            </Text>
            <Text secondary subtitle sfregular>
              Welcome back
            </Text>
          </View>
          <Avatar />
        </View>
        <Card />
        <FavouriteService />
      </View>
      <Modal visible={analyticsVisible} animationType="slide">
        <Analytics />
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;
