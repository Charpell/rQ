import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
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

  export default class OtherIssues extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render(){
  return (
    <Block padding>
      <Block padding>
        <Text
        caption
        color={80}
        >
        We’re here to help, provide detailed information of the issue you’re having.
        </Text>

      <Block paddingTop={80}>
        <Text>All issues are reolved 12 hours afer submission</Text>
      <Input
      paddingTop={10}
          multiline={true}
          numberOfLines={6}
          textAlignVertical={"top"}
          style={{height: 180,

          }}
          placeholder="Type your message here"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        {/* <Block color padding row style={{justifyContent: "space-between"}}>
          <Text>hi</Text>
          <Text>hi</Text>
        </Block> */}
       
       <Block center paddingTop={30}> 
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
               Submit
              </Text>
              <ForwardButton />
            </Button>
            </Block>
      </Block>

      </Block>

     
      

    </Block>
  )


}

}



// Maroof Shittu   03:46 PM
// no, distractions

// can't stay long but...

// the idea for the other issue screen is

// a block with one input in it

// and one block under it that has those two icons

// the input is multiline just like you stated but there are some additional props you will set to make  it work well

// http://reactnative.dev/docs/textinput#multiline

// read this props description

// you'll need to add the textAlignVertical={true} prop

// then you'll add numberOfLines prop as well

// hope this wouuld be helpful

// but I gotta go

// has left the Live Share session