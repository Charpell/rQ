import React, { useState, useContext, useEffect } from "react";
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
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../contex/auth/authState'
import { VendorContext } from '../../contex/vendor/vendorState'



const AirtimeSubscribeScreen = props => {
  const authContext = useContext(AuthContext)
  const vendorContext = useContext(VendorContext)

  const { payForAirtime, currentService } = vendorContext
  

  const { register, handleSubmit, setValue, errors } = useForm()
  useEffect(() => {
    register({ name: "mobileNumber"}, { required: true, maxLength: 11, minLength: 1 })
    register({ name: "amount"}, { required: true, pattern: /\d+/ })
  }, [register])

  const onSubmit = data => {
    const newData = { serviceName: currentService.serviceName, paymentMadeWith: "WALLET", ...data }
    payForAirtime(newData)
      .then((response) => {
        console.log('response', response)
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  return (
    <Block safe color={COLORS.background}>
      <Header 
        title="Airtime"
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
        Kindly enter phone number
      </Text>
        <Block flex={0.1} center middle margin={[60, 0, 0]}>
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
              placeholder={"Recipient Phone Number"}
              onChangeText={text => {
                setValue('mobileNumber', text);
              }}
            />  
            <Input
              width={154}
              maxLength={16}
              size={SIZES.caption}
              placeholder={"Amount"}
              onChangeText={text => {
                setValue('amount', parseInt(text))
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
                onPress={handleSubmit(onSubmit)}
              >
                <Text
                  white
                  center
                  sfregular
                  height={SIZES.body}
                  size={SIZES.subtitle}
                >
                  Confirm to Subscribe
                </Text>
                <ForwardButton />
              </Button>
            </Block>
          </Block>
    </Block>
  );
};
export default AirtimeSubscribeScreen;
