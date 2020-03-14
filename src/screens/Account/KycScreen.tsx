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
import { COLORS, } from "../../utils/theme";
import {  ScrollView } from "react-native-gesture-handler";

const KycScreen = props => {
  const { navigation } = props;

    return(
      <ScrollView>

        <Block color={COLORS.background } padding>
            <Text gray sfregular size={SIZES.caption} padding paddingLeft>
            In line with the Central Bank of Nigeria regulations Know Your Customer (KYC) requirement set up to prevent theft, financial fraud, money laundering and terrorist financing.
            </Text>
                <Block   padding={16} row>
                <Card radius={18} padding={18}>
                    <Block row space="between" paddingBottom={29}>
                    <Text subtitle>Current Limits</Text>
                    <Text secondary subtitle>Level 1</Text>
                    </Block>


                    <Block row space="between" paddingBottom={8}>
                    <Text small gray>Daily Transactions Limit</Text>
                    <Text small gray>N50,000</Text>
                    </Block>
                    
                    
                    <Block row space="between" paddingBottom={18}>
                    <Text small gray>Maximum balance</Text>
                    <Text small gray>N700,000</Text>
                    </Block>
                    
                </Card>
                </Block>
        
                <Block   padding={20} row>
                <Card radius={18} padding={18}>
                    <Block row space="between" paddingBottom={29}>
                    <Text subtitle>Current Limits</Text>
                    <Text secondary subtitle>Level 2</Text>
                    </Block>


                    <Block row space="between" paddingBottom={8}>
                    <Text small gray>Daily Transactions Limit</Text>
                    <Text small gray>N500,000</Text>
                    </Block>
                    
                    
                    <Block row space="between" paddingBottom={18}>
                    <Text small gray>Maximum balance</Text>
                    <Text small gray>N3,000,000</Text>
                    </Block>
                    
                </Card>
                </Block>
        
                <Block   padding={20} row>
                <Card radius={18} padding={18}>
                    <Block row space="between" paddingBottom={29}>
                    <Text subtitle>Current Limits</Text>
                    <Text secondary subtitle>Level 3</Text>
                    </Block>


                    <Block row space="between" paddingBottom={8}>
                    <Text small gray>Daily Transactions Limit</Text>
                    <Text small gray>N20,000,000</Text>
                    </Block>
                    
                    
                    <Block row space="between" paddingBottom={18}>
                    <Text small gray>Maximum balance</Text>
                    <Text small gray>Unlimited</Text>
                    </Block>
                    
                </Card>
                </Block>

        </Block>

            </ScrollView>
    )
};
export default KycScreen;


