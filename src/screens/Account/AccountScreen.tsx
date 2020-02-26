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
// import ImageIcon from "../../components/primary/ImageIcon";

const AccountScreen = props => {
    

    return(

        <Block>
            {/* ProfileImage */}
            <Card color={"#F2F5F8"}paddingTop={70} shadow center middle column>
                  <Image  
                  style={ styles.avatar } source={{ uri: 'https://cl.ly/55da82beb939/download/avatar-default.jpg' }} 
                  
                  />
                  <Button
            marginBottom={45}
            marginTop={25}
              center
              middle
              width={SIZES.width * 0.3}
              height={SIZES.base * 4.5}
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



            <Block center middle padding>
                <Text>Account</Text>
            </Block>
            
            <View style={styles.hairline} />



          {/* <Block padding={20}>             */}
            <Card  row paddingLeft={20} paddingRight={20} paddingTop={18} radius={15} color={Colors.white} column>
             
             <Block row style={{ justifyContent: "space-between"}}> 
             {/* leftside */}
             <View style={{flexDirection: "column"}}>
              <Text subtitle>Current Limits</Text>
              
              <Block paddingTop={14}>
              <Text gray caption>Daily transactions limit</Text>
              <Text gray caption>Maximum balance</Text>
              </Block>

              <Block paddingTop={15}>
              <Text paddingTop={14} info small>View all KYC levels</Text>
              </Block>
              </View>

              {/* rightSide */}
             <View style={{flexDirection: "column"}}>
              <Text subtitle color={Colors.primary}>Level 1</Text>
              
              <Block paddingTop={14}>
              <Text paddingLeft={10} gray caption>N 50,000</Text>
              <Text gray caption>N 700,000</Text>
              </Block>
              {/* to be corrected */}
              <Block paddingTop={15}>
              <Text paddingLeft={55} subtitle color={Colors.primary}>></Text>
              </Block>
              </View>

              </Block>
           </Card>
           {/* </Block> */}


            <Block paddingTop={40} center middle padding>
              <Block>
              <Button
              secondary
              center
              middle
              width={SIZES.width * 0.7}
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

              <Block>
              <Button
              
              center
              middle
              width={SIZES.width * 0.7}
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













        </Block>

    )
};

export default AccountScreen;


const styles = StyleSheet.create({
avatar: {
    width: 110,
    height: 110,
    borderRadius: 60
},
hairline: {
    backgroundColor: 'black',
    height: 2,
    width: 400
  },
  
})


