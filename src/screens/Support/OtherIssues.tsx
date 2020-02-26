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
