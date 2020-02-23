import React, { useContext, useEffect, useState } from "react";
import { Modal, Alert } from "react-native";
import {
  MenuButton,
  FavouriteService,
  Analytics,
  Block,
  Text,
  Button,
  ImageIcon,
  ServiceList
} from "../../components";
import { SIZES, COLORS } from "../../utils/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  airtimeServices,
  dataSubscriptionServices,
  electricityServices,
  cableServices
} from "../../data/index";

const HomeScreen = ({ navigation }) => {
  const [analyticsVisible, setAnalyticsVisible] = useState(false);
  return (
    <Block safe background>
      <Block
        primary
        flex={0}
        height={SIZES.base * 7}
        space="between"
        style={{
          alignItems: "flex-end"
        }}
        row
        bottom
        shadow
        elevation={3}
        paddingHorizontal={SIZES.base * 2}
        paddingBottom={SIZES.base}
      >
        <MenuButton width={24} height={13} />
        <Text sfmedium white title height={21}>
          RubeePay
        </Text>
        <Button
          transparent
          height={SIZES.base * 2}
          paddingHorizontal={SIZES.base * 2}
          onPress={() => Alert.alert("wtf")}
        >
          <MaterialCommunityIcons
            name="bell"
            color="white"
            size={SIZES.base * 2}
          />
        </Button>
      </Block>
      <Block background scroll>
        <Block
          row
          center
          middle
          space="between"
          paddingHorizontal={SIZES.padding}
          marginTop={SIZES.base * 4}
        >
          <Button
            white
            width={94}
            height={64}
            radius={SIZES.body}
            onPress={() => navigation.navigate("AddMoneyScreen")}
          >
            <Block center middle>
              <ImageIcon absolute top={15} name="add" />
              <ImageIcon absolute top={0} name="addCircle" />
            </Block>
            <Text
              sfregular
              size={SIZES.small}
              tertiary
              center
              height={SIZES.caption}
              padding
            >
              Add Money
            </Text>
          </Button>

          <Button
            white
            width={94}
            height={64}
            radius={SIZES.body}
            onPress={() => navigation.navigate("TransferToMyBank")}
          >
            <Block center middle>
              <ImageIcon name="transfer" />
            </Block>
            <Text
              center
              padding
              sfregular
              size={SIZES.small}
              tertiary
              height={SIZES.caption}
            >
              Transfer Money
            </Text>
          </Button>

          <Button
            white
            width={94}
            height={64}
            radius={SIZES.body}
            onPress={() => navigation.navigate("WithdrawalScreen")}
          >
            <Block center middle>
              <ImageIcon name="withdraw" />
            </Block>
            <Text
              sfregular
              size={SIZES.small}
              tertiary
              height={SIZES.caption}
              center
              padding
            >
              Withdraw Money
            </Text>
          </Button>
        </Block>
        <Block paddingHorizontal={SIZES.padding} marginTop={SIZES.base * 4}>
          <ServiceList category="airtime" service={airtimeServices} />
          <ServiceList
            category="Data Subscription"
            service={dataSubscriptionServices}
          />
          <ServiceList category="Cable TV" service={cableServices} />
          <ServiceList category="Electricity" service={electricityServices} />
        </Block>
      </Block>
      <Modal visible={analyticsVisible} animationType="slide">
        <Analytics />
      </Modal>
    </Block>
  );
};

export default HomeScreen;
