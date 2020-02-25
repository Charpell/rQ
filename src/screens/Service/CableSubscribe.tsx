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



const CableSubscribeScreen = props => {
  const authContext = useContext(AuthContext)
  const vendorContext = useContext(VendorContext)

  const { getCabletvDetails, payForCable, variationDetails, vendorDetails, currentService } = vendorContext
  

  const { register, handleSubmit, setValue, errors } = useForm()
  const [ variationData, setVariationData ] = useState([])

  useEffect(() => {
    register({ name: "phone"}, { required: true, maxLength: 11, minLength: 1 })
    register({ name: "cable"}, { required: true })
  }, [register])

  const onSubmit = async data => {
    const newData = { smartCardNumber: vendorDetails.account, serviceName: currentService.serviceName, amount: variationData.variation_amount, paymentMadeWith: "WALLET", customernumber: vendorDetails.customernumber.toString(), customername: vendorDetails.name, variation_code: variationData.variation_code, mobileNumber: data.phone}
    const result = await payForCable(newData)
    console.log('result', result)

  }

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
              placeholder={"Recipient Phone Number"}
              onChangeText={text => {
                setValue('phone', text);
              }}
            />  
            <Input
              autoCorrect={false}
              width={154}
              height={SIZES.padding * 2}
              maxLength={16}
              size={SIZES.caption}
              value={vendorDetails.account}
            />   
            <Input
              autoCorrect={false}
              width={154}
              height={SIZES.padding * 2}
              maxLength={16}
              size={SIZES.caption}
              value={currentService.serviceName}
            /> 
            <Dropdown
              label='Select Plan'
              data={variationDetails}
              fontSize={12}
              onChangeText={(text, index) => {
                setValue('cable', text)
                setVariationData(variationDetails[index])
              }}
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
              autoCorrect={false}
              width={154}
              height={SIZES.padding * 2}
              maxLength={16}
              size={SIZES.caption}
              value={vendorDetails.name}
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
export default CableSubscribeScreen;
