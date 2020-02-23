import React, { useState } from "react";
import { FlatList } from "react-native";
import {
  TabedView,
  Block,
  Text,
  Input,
  Button,
  CirIcon,
  ForwardButton,
  ImageIcon,
  Card,
  Header
} from "../../components";
import { COLORS, SIZES } from "../../utils/theme";
import { savedBeneficiaries } from "../../data";
import { Ionicons } from "@expo/vector-icons";
import { Dropdown } from 'react-native-material-dropdown'
import { rgba, mergeTheme } from "../../utils";


const CableSubscribeScreen = props => {
  const [ accNumberValue, onAccNumberChange ] = useState("")
  const [ bankNameValue, onBankNameChange ] = useState("")
  const [ narrationValue, onNarrationChange ] = useState("")
  const [ data, setData ] = useState([{
      value: 'Banana',
    }, {
      value: 'Mango',
    }, {
      value: 'Pear',
    }])

  return (
    <Block safe color={COLORS.background}>
      <Header 
        title="Cable TV"
        renderLeft={() => {
          return (
            <ImageIcon name="back" />
            )
        }}
        onPressLeft={() => {
          props.navigation.goBack()
        }}
      />
      <Text primary sfregular size={SIZES.subtitle} margin={20}>
        Kindly Subscribe for your Cable TV
      </Text>
        <Block flex={0.1} center middle margin={[60, 0, 0]}>
          <ImageIcon name={props.navigation.state.params.data} style={{ width: 100, height: 100 }}/>
        </Block>
      <Block
            paddingHorizontal={SIZES.base * 2}
            flex={false}
          >
            <Input
              autoCorrect={false}
              width={154}
              height={SIZES.padding * 2}
              maxLength={16}
              keyboardType="number-pad"
              size={SIZES.caption}
              value={accNumberValue}
              placeholder={"Recipient Phone Number"}
              onChangeText={text => {
                onAccNumberChange(text);
              }}
            />  
            <Input
              autoCorrect={false}
              width={154}
              height={SIZES.padding * 2}
              maxLength={16}
              keyboardType="number-pad"
              size={SIZES.caption}
              value={accNumberValue}
              placeholder={"Smart Card Number"}
              onChangeText={text => {
                onAccNumberChange(text);
              }}
            />   
            <Dropdown
              label='Select Plan'
              data={data}
              fontSize={12}
              containerStyle={{
                borderWidth: 1,
                height:  SIZES.base * 6,
                borderRadius: SIZES.radius * 3,
                borderColor: rgba(COLORS.white, 0.1),
                color: COLORS.tertiary,
                fontSize: SIZES.font,
                backgroundColor: COLORS.white,
                justifyContent: 'center',
                paddingLeft: 35,
                marginTop: 10,
                marginBottom: 10
              }}
            />
            <Input
              width={154}
              maxLength={16}
              size={SIZES.caption}
              value={narrationValue}
              placeholder={"Amount"}
              onChangeText={text => {
                onNarrationChange(text);
              }}
            />
            <Block
              row
              paddingHorizontal={SIZES.base}
              paddingVertical={SIZES.padding}
            >
             
            </Block>
            <Block center flex={false}>
              <Button
                center
                middle
                width={SIZES.width * 0.7}
                height={SIZES.base * 7}
                radius={SIZES.btnRadius}
              >
                <Text
                  white
                  center
                  sfregular
                  height={SIZES.body}
                  size={SIZES.subtitle}
                >
                  Confirm
                </Text>
                <ForwardButton />
              </Button>
            </Block>
          </Block>
    </Block>
  );
};
export default CableSubscribeScreen;
