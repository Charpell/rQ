import React, { useContext } from "react";
import { withNavigation } from "react-navigation";
import { Button, Text, ImageIcon, Card } from "./";
import { SIZES } from "../utils/theme";
import { VendorContext } from '../contex/vendor/vendorState'

const ServiceCard = props => {
  const { navigation, item, style } = props;
  const vendorContext = useContext(VendorContext)
  const { getVariationDetails, setService } = vendorContext

  const onSubmit = async () => {
    const result = await getVariationDetails({ "serviceType": item.item.serviceType, "serviceName": item.item.serviceName})
    if (result !== 200) return 
    setService(item.item)
    if (item.item.verify) {
      props.navigation.navigate("VerifyServiceScreen")
    } else {
      serviceScreen()
    }
  }

  const serviceScreen = () => {
    switch(item.item.serviceType) {
      case "AIRTIME":
        return props.navigation.navigate("AirtimeServiceScreen")
      case "DATA":
        return props.navigation.navigate("DataSubscribeScreen")
      case "ELECTRICITY":
        return props.navigation.navigate("ElectricitySubScribeScreen")
      default: 
        return ""
    }
  }
  

  return (
    <Button
      white
      width={70}
      height={67}
      style={style}
      radius={SIZES.cardRadius}
      middle
      center
      padding
      onPress={onSubmit}
    >

      
      <Text center tertiary sfregular size={SIZES.small} height={SIZES.caption}>
        {item.item.serviceName}
      </Text>
    </Button>
  );
};

export default withNavigation(ServiceCard);
