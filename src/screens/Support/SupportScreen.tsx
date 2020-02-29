import React, { Component } from 'react'
import { View } from 'react-native'
import {
    TabedView,
    Block,
    Text,
    Input,
    Button,
    CirIcon,
    ForwardButton,
    ImageIcon
  } from "../../components";
  import { COLORS, SIZES } from "../../utils/theme";

const SupportScreen = props => {

  const { navigation } = props;
  
      return (
          <Block color={COLORS.background } padding>
            <Text primary sfregular size={SIZES.caption} paddingLeft>
              Welcome to our 24hrs help center
            </Text>
 
              <Block
              padding
              style={{
                  flex:1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  paddingTop: 30
              }}
              >

              <Button
                  white
                  height={SIZES.base * 10}
                  width={107}
                  shadow
                  center
                  middle
                  radius={14}
                  paddingHorizontal
                  paddingVertical
                  marginHorizontal

                  >
                  <Block middle center paddingHorizontal={40}>
                      <ImageIcon
                      name="chat"
                      style={{
                          position: "absolute",
                          top: 14
                      }}
                      />
                  </Block>
                  <Text
                      sfregular
                      size={SIZES.small}
                      spacing={0.1}
                      height={SIZES.caption}
                      center
                      tertiary
                  >
                      Chat with Rpay 
                  </Text>
                  </Button>
                  <Button
                  white

                  height={SIZES.base * 10}
                  width={107}
                  shadow
                  center
                  middle
                  radius={14}
                  paddingHorizontal
                  paddingVertical
                  marginHorizontal
                    onPress={() => navigation.navigate("FaqScreen")}
                  >
                  <Block middle center paddingHorizontal={40}>
                      <ImageIcon
                      style={{
                          position: "absolute",
                          top: 14
                      }}
                      name="question"
                      />
                  </Block>
                  <Text
                      sfregular
                      size={SIZES.small}
                      spacing={0.1}
                      height={SIZES.caption}
                      center
                      tertiary
                  >
                      FAQ
                  </Text>
                  </Button>



                  
                  <Button
                  white
                  //   flex={0.4}
                  height={SIZES.base * 10}
                  width={107}
                  shadow
                  center
                  middle
                  radius={14}
                  paddingHorizontal
                  paddingVertical
                  marginHorizontal
                    onPress={() => navigation.navigate('Report')}
                  >
                  <Block middle center paddingHorizontal={40}>
                      <ImageIcon
                      style={{
                          position: "absolute",
                          top: 14
                      }}
                      name="comment"
                      />
                      
                  </Block>
                  <Text
                      sfregular
                      size={SIZES.small}
                      spacing={0.1}
                      height={SIZES.caption}
                      center
                      tertiary
                  >
                      Report Issue
                  </Text>
                  </Button>



                  <View                     style={{
                      paddingTop: 30
                  }}>
                  <Button
                  white
                  height={SIZES.base * 10}
                  width={107}
                  shadow
                  center
                  middle
                  radius={14}
                  paddingHorizontal
                  paddingVertical
                  marginHorizontal
                  >
                  <Block middle center paddingHorizontal={40}>
                      <ImageIcon
                      style={{
                          position: "absolute",
                          top: 14
                      }}
                      name="calling"
                      />

                  </Block>
                  <Text
                      sfregular
                      size={SIZES.small}
                      spacing={0.1}
                      height={SIZES.caption}
                      center
                      tertiary
                  >
                      24hr Call Center
                  </Text>
                  </Button>
                  </View>
          </Block>


          </Block>
        );
   }
        export default SupportScreen;
