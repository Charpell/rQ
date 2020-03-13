import React, { useState } from "react";
import { View, Switch} from 'react-native'
import {
    TabedView,
    Block,
    Text,
    Input,
    Button,
    BackButton,
    CirIcon,
    ForwardButton,
    ImageIcon,
    Modal
  } from "../../../components";
  import { COLORS, SIZES } from "../../../utils/theme";
  import { TouchableOpacity } from 'react-native-gesture-handler';

const SettingsScreen = props => {

  const { navigation } = props;

  const [fingerPrint, setFingerPrint] = useState(false);

  let modalRef = null;
  const toggle = () => modalRef.toggleModal();

  
      return (
          <Block color={COLORS.background } padding>
            <Text primary sfregular size={SIZES.caption} paddingLeft>
            Secure your App for seamless operation
            </Text>
 
            <Block padding paddingTop={35}>
                        <TouchableOpacity>
                        <Text>Change Pin</Text>
                        </TouchableOpacity>

               
                        <View  style={{ flexDirection: "row", paddingTop: 35 }}>
        
                            <Text>Fingerprint Unlock</Text>
                            <Block>
                            <Switch
                            value={fingerPrint}
                            onValueChange={value => setFingerPrint(value)}
                            trackColor={{ true: COLORS.secondary, false: COLORS.muted }}
                            />
                            </Block>
                            
                        </View>

                        <TouchableOpacity  style={{ flexDirection: "row",  paddingTop: 35 }}  onPress={() => navigation.navigate("SignInScreen")}>
        
                            <Text>Sign Out</Text>
                            <Block>
                            <ImageIcon
                                name="signoutaAlt"
                                style={{
                                    position: "absolute",
                                    right: 18,
                                    bottom: 6,
                                }}
                             /> 
                            <ImageIcon
                                style={{
                                    position: "absolute",
                                    right: 10,
                                    bottom: 2,
                                }}
                                name="signoutcAlt"
                            />                       
                            </Block>
                            
                        </TouchableOpacity>


                    </Block>

          </Block>
        );
   }

   export default SettingsScreen;
