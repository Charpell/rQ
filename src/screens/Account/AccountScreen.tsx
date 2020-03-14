import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { SIZES } from "../../utils/theme";
import {
  TabedView,
  Block,
  Text,
  Card,
  Input,
  Button,
  CirIcon,
  ForwardButton,
  ImageIcon
} from "../../components";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
// import ImageIcon from "../../components/primary/ImageIcon";

const AccountScreen = props => {
  const { navigation } = props;

    return(
      <ScrollView>

        <Block>
          
            <Card color={"#F2F5F8"} paddingTop={24} shadow center middle column>
              <View>
            <ImageIcon name="chris" style={ styles.avatar } />
            <ImageIcon
              name="camera"
              style={{
                position: "absolute",
                bottom: 7,
                right: 1
              }}
              />
            </View>   
                  <Button
            marginBottom={6}
            marginTop={26}
            center
            middle
            width={SIZES.width * 0.25}
            height={SIZES.base * 3.5}
            radius={115}
            //   onPress={() => setFinished(true)}
            >
              <Text
                white
                center
                sfregular
                height={SIZES.body}
                size={SIZES.caption}
                >
              EDIT PROFILE
              </Text>
            </Button>
            </Card>



            <Block center  middle padding >
                <Text>Account</Text>
            </Block>


            <Block center middle padding paddingBottom={0}>
              <Block  style={styles.lineStyle}/>
            </Block>


            <Block   padding={20} row>
              <Card radius={18} padding={18}>
                <Block row space="between" paddingBottom={29}>
                  <Text subtitle>Current Limits</Text>
                  <Text secondary subtitle>Level 1</Text>
                </Block>


                <Block row space="between" paddingBottom={8}>
                  <Text small gray>Daily Transactions Limit</Text>
                  <Text small gray>N30,000</Text>
                </Block>
                
                
                <Block row space="between" paddingBottom={18}>
                  <Text small gray>Maximum balance</Text>
                  <Text small gray>N500,000</Text>
                </Block>
                
                
                <TouchableOpacity  style={{ flexDirection: "row"}}  onPress={() => navigation.navigate("SignInScreen")}>
        
                            <Text primary semibold caption>View all KYC levels</Text>
                            <Block>
                            <ImageIcon
                                name="signoutaAlt"
                                style={{
                                  position: "absolute",
                                  right: 0,
                                  bottom: 6,
                                }}
                                />                      
                            </Block>
                            
                </TouchableOpacity>

              </Card>
            </Block>




            <Block paddingTop={35}  center middle padding>
              <Button
              secondary
              center
              middle
              width={SIZES.width * 0.64}
              height={SIZES.base * 5.5}
              radius={SIZES.btnRadius}
              >
              <Text
              white
              center
              sfregular
              height={SIZES.body}
              size={SIZES.caption}
              >
              Upgrade to KYC Level 2
              </Text>
              <ForwardButton />
              </Button>
            </Block>

            <Block paddingTop={18}  center middle padding>
              <Button
              primary
              center
              middle
              width={SIZES.width * 0.64}
              height={SIZES.base * 5.5}
              radius={SIZES.btnRadius}
              >
              <Text
              white
              center
              sfregular
              height={SIZES.body}
              size={SIZES.caption}
              >
              Upgrade to Agent
              </Text>
              <ForwardButton />
              </Button>
            </Block>



        </Block>

            </ScrollView>
    )
};
export default AccountScreen;






const styles = StyleSheet.create({
hairline: {
    backgroundColor: 'black',
    height: 2,
    width: 400
  },
  avatar: {
    width: 90,
    height: 100,
    borderRadius: 30,
  },
    lineStyle:{
    width: '90%',
    borderWidth: 0.3,
    borderColor:'#CCC7C4',
    margin: 4,
    
}
})


