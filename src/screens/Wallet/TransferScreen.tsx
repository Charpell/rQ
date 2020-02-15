import React, { useState } from "react";
import { FlatList } from "react-native";
import {
  TabedView,
  Block,
  Text,
  Input,
  Button,
  Card,
  CirIcon,
  ForwardButton,
  ImageIcon
} from "../../components";
import { COLORS, SIZES } from "../../utils/theme";
import { savedBeneficiaries } from "../../data";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const TransferScreen = props => {
  const [amountValue, onAmountChange] = useState("");
  const [accNumberValue, onAccNumberChange] = useState("");
  const [bankNameValue, onBankNameChange] = useState("");
  const [narrationValue, onNarrationChange] = useState("");
  const { navigation } = props;
  const renderBeneficiaries = ({ item }) => (
    <Button height={52} width={54} marginRight={11} white radius={14}>
      <Block center padding middle>
        <CirIcon color={COLORS.inactiveTab} size={18}>
          <ImageIcon name="universityAlt" style={{ height: 10, width: 9 }} />
        </CirIcon>
      </Block>
      <Block center padding middle>
        <Text tertiary sfregular size={SIZES.base}>
          {item.name}
        </Text>
      </Block>
    </Button>
  );
  const views = [
    {
      id: 0,
      label: "View Wallet",
      activeIcon: "wallet",
      inactiveIcon: "walletAlt",
      viewContent: () => (
        <ScrollView>
          <Block width={SIZES.width} paddingVertical={SIZES.base}>
            <Block marginTop={SIZES.padding * 2} center flex={0.4}>
              <Text gray2 sfregular size={SIZES.caption} height={SIZES.body}>
                Amount (N)
              </Text>
              <Input
                autoCorrect={false}
                autoFocus
                width={154}
                center
                maxLength={16}
                keyboardType="number-pad"
                size={SIZES.h2}
                value={amountValue}
                placeholder={"0.00"}
                onChangeText={text => {
                  onAmountChange(text);
                }}
              />
              <Text gray2 sfregular size={SIZES.caption} height={SIZES.body}>
                *Tansaction fee N15
              </Text>
            </Block>
            <Block
              flex={0.2}
              row
              space="between"
              center
              paddingHorizontal={SIZES.base * 2}
            >
              <Text gray2 sfregular size={SIZES.caption}>
                Choose beneficiary
              </Text>
              <Button transparent>
                <Text primary size={SIZES.caption}>
                  Find beneficiary
                </Text>
              </Button>
            </Block>
            <Block flex={0.2} middle paddingHorizontal={SIZES.base}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={savedBeneficiaries}
                keyExtractor={(item, index) =>
                  `saved-beneficiary-id-${item.id}-list-item-${index}`
                }
                renderItem={renderBeneficiaries}
              />
            </Block>
            <Block
              paddingHorizontal={SIZES.base * 2}
              marginTop={SIZES.padding * 2}
            >
              <Input
                autoCorrect={false}
                width={154}
                height={SIZES.padding * 2}
                maxLength={16}
                keyboardType="number-pad"
                size={SIZES.caption}
                value={accNumberValue}
                placeholder={"Account Number"}
                onChangeText={text => {
                  onAccNumberChange(text);
                }}
              />
              <Input
                width={154}
                maxLength={16}
                size={SIZES.caption}
                value={bankNameValue}
                placeholder={"Bank Name"}
                onChangeText={text => {
                  onBankNameChange(text);
                }}
              />
              <Input
                width={154}
                maxLength={16}
                size={SIZES.caption}
                value={narrationValue}
                placeholder={"Narration"}
                onChangeText={text => {
                  onNarrationChange(text);
                }}
              />
              <Block
                row
                paddingHorizontal={SIZES.base}
                paddingVertical={SIZES.padding}
              >
                <Text gray2 sfregular size={SIZES.caption}>
                  Save this payment
                </Text>
              </Block>
              <Block center>
                <Button
                  center
                  middle
                  width={SIZES.width * 0.7}
                  height={SIZES.base * 4.5}
                  radius={SIZES.btnRadius}
                >
                  <Text
                    white
                    center
                    sfregular
                    height={SIZES.body}
                    size={SIZES.caption}
                  >
                    Confirm
                  </Text>
                  <ForwardButton />
                </Button>
              </Block>
            </Block>
          </Block>
        </ScrollView>
      )
    },
    {
      id: 1,
      label: "Via Card/ATM",
      activeIcon: "atmCard",
      inactiveIcon: "atmCardAlt",
      viewContent: () => (
        <ScrollView>
          <Block width={SIZES.width} paddingVertical={SIZES.base}>
            <Block marginTop={SIZES.padding * 2} center flex={0.4}>
              <Text gray2 sfregular size={SIZES.caption} height={SIZES.body}>
                Amount (N)
              </Text>
              <Input
                autoCorrect={false}
                autoFocus
                width={154}
                center
                maxLength={16}
                keyboardType="number-pad"
                size={SIZES.h2}
                value={amountValue}
                placeholder={"0.00"}
                onChangeText={text => {
                  onAmountChange(text);
                }}
              />
              <Text gray2 sfregular size={SIZES.caption} height={SIZES.body}>
                *Tansaction fee N15
              </Text>
            </Block>
            <Block
              flex={0.2}
              row
              space="between"
              center
              paddingHorizontal={SIZES.base * 2}
            >
              <Text gray2 sfregular size={SIZES.caption}>
                Choose beneficiary
              </Text>
              <Button transparent>
                <Text primary size={SIZES.caption}>
                  Find beneficiary
                </Text>
              </Button>
            </Block>
            <Block flex={0.2} middle paddingHorizontal={SIZES.base}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={savedBeneficiaries}
                keyExtractor={(item, index) =>
                  `saved-beneficiary-id-${item.id}-list-item-${index}`
                }
                renderItem={renderBeneficiaries}
              />
            </Block>
            <Block
              paddingHorizontal={SIZES.base * 2}
              marginTop={SIZES.padding * 2}
            >
              <Input
                autoCorrect={false}
                width={154}
                height={SIZES.padding * 2}
                maxLength={16}
                keyboardType="number-pad"
                size={SIZES.caption}
                value={accNumberValue}
                placeholder={"Account Number"}
                onChangeText={text => {
                  onAccNumberChange(text);
                }}
              />
              <Input
                width={154}
                maxLength={16}
                size={SIZES.caption}
                value={bankNameValue}
                placeholder={"Bank Name"}
                onChangeText={text => {
                  onBankNameChange(text);
                }}
              />
              <Input
                width={154}
                maxLength={16}
                size={SIZES.caption}
                value={narrationValue}
                placeholder={"Narration"}
                onChangeText={text => {
                  onNarrationChange(text);
                }}
              />
              <Block row>
                <Text gray2 sfregular size={SIZES.caption}>
                  Save this payment
                </Text>
              </Block>
              <Block center>
                <Button
                  center
                  middle
                  width={SIZES.width * 0.7}
                  height={SIZES.base * 4.5}
                  radius={SIZES.btnRadius}
                >
                  <Text
                    white
                    center
                    sfregular
                    height={SIZES.body}
                    size={SIZES.caption}
                  >
                    Confirm
                  </Text>
                  <ForwardButton />
                </Button>
              </Block>
            </Block>
          </Block>
        </ScrollView>
      )
    }
  ];
  return (
    <Block color={COLORS.background}>
      <Text primary sfregular size={SIZES.caption} paddingLeft>
        Quick way to Transfer Money to your Bank
      </Text>
      <Block>
        <TabedView views={views} />
      </Block>
    </Block>
  );
};
export default TransferScreen;
