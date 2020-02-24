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

  const { getCabletvDetails, payForCable } = vendorContext
  

  const { register, handleSubmit, setValue, errors } = useForm()
  const [ data, setData ] = useState([{
      value: 'STARTIMES',
    }])

  useEffect(() => {
    register({ name: "phone"}, { required: true, maxLength: 11, minLength: 1 })
    register({ name: "smartCardNumber"}, { required: true })
    register({ name: "cable"}, { required: true })
    register({ name: "amount"}, { required: true, pattern: /\d+/ })
  }, [register])

  const onSubmit = data => {
    payForCable(data)
      .then((response) => {
        if (response.status === 'failure') {
          console.log(response.message)
        } else {
          console.log(response.data)
        }
      })
      .catch((error) => {
        console.log('error', error)
      })
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
              placeholder={"Smart Card Number"}
              onChangeText={text => {
                setValue('smartCardNumber', text);
              }}
            />   
            <Dropdown
              label='Select Plan'
              data={data}
              fontSize={12}
              onChangeText={text => {
                setValue('cable', text)
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
              width={154}
              maxLength={16}
              size={SIZES.caption}
              placeholder={"Amount"}
              onChangeText={text => {
                setValue('amount', parseInt(text));
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
