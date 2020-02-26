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
import { AuthContext } from '../../contex/auth/authState'
import { VendorContext } from '../../contex/vendor/vendorState'
import { useForm } from 'react-hook-form'



const ElectricitySubscribeScreen = props => {
  const authContext = useContext(AuthContext)
  const vendorContext = useContext(VendorContext)

  const { state, loading, payForElectricity, vendorDetails, currentService } = vendorContext
  

  const { register, handleSubmit, setValue, errors } = useForm()
  const [ data, setData ] = useState([{
      value: 'AEDC_PREPAID',
    }])

  const onSubmit = data => {
    const newData = { meterNumber: vendorDetails.account, serviceName: currentService.serviceName, customernumber: vendorDetails.customernumber, paymentMadeWith: "WALLET",...data}
    payForElectricity(newData)
      .then((response) => {
        if (response.status === "failure") {
          console.log(response.message)
        } else {
          console.log('response', response)
        }
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  useEffect(() => {
    register({ name: "mobileNumber"}, { required: true, maxLength: 11, minLength: 1 })
    register({ name: "amount"}, { required: true, pattern: /\d+/ })
  }, [register])

  return (
    <Block safe color={COLORS.background}>
      <Header 
        title="Electricity"
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
        Kindly Subscribe for your Electricity
      </Text>
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
              autoCorrect={false}
              width={154}
              height={SIZES.padding * 2}
              maxLength={16}
              keyboardType="number-pad"
              size={SIZES.caption}
              value={vendorDetails.account}
            />   
            <Input
              width={154}
              maxLength={16}
              size={SIZES.caption}
              placeholder={"Amount"}
              onChangeText={text => {
                setValue('amount', parseInt(text));
              }}
            />
            <Input
              width={154}
              maxLength={16}
              size={SIZES.caption}
              value={vendorDetails.name}
            />
            <Input
              width={154}
              maxLength={16}
              size={SIZES.caption}
              value={currentService.serviceName}
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
                  Confirm
                </Text>
                <ForwardButton />
              </Button>
            </Block>
          </Block>
    </Block>
  );
};
export default ElectricitySubscribeScreen;
