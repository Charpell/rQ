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



const VerifyService = props => {
  const authContext = useContext(AuthContext)
  const vendorContext = useContext(VendorContext)

  const { getCabletvDetails, payForCable, variationDetails, currentService, getElectricityDetails } = vendorContext
  

  const { register, handleSubmit, setValue, errors } = useForm()

  useEffect(() => {
    register({ name: placeholderType() }, { required: true })
  }, [register])

  const onSubmit = async data => {
    const newData = { serviceName: currentService.serviceName, ...data}
    try {
      if (currentService.serviceType === "CABLETV") {
        const result = await getCabletvDetails(newData)
        if (result !== 200) return
        screenType()
      } else {
        const result = await getElectricityDetails(newData)
        if (result !== 200) return       
        screenType()
      }
    } catch (error) {
      console.log(error)
    }
  }
  

  const screenType = () => {
    switch(currentService.serviceType) {
      case "CABLETV": 
      return props.navigation.navigate("CableSubscribeScreen")
      case "ELECTRICITY": 
      return props.navigation.navigate("ElectricitySubscribeScreen")
      case "AIRTIME": 
      return props.navigation.navigate("AirtimeServiceScreen")
      case "DATA": 
      return props.navigation.navigate("DataSubscribeScreen")
      default:
        return ""
    }
  }

  const placeholderType = () => {
    switch(currentService.serviceType) {
      case "CABLETV": 
        return "smartCardNumber"
      case "ELECTRICITY": 
        return "meterNumber"
      default:
        return ""
    }
  }
  

  return (
    <Block safe color={COLORS.background}>
      <Header 
        title="Verify Service"
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
        Verify {currentService.serviceType}
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
              size={SIZES.caption}
              placeholder={placeholderType()}
              onChangeText={text => {
                setValue(placeholderType(), text);
              }}
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
export default VerifyService;
