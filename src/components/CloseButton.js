import React from 'react'
import {withNavigation} from 'react-navigation'
import Button from './primary/Button';
import Text from './primary/Text'
import ImageIcon from './primary/ImageIcon';
import { SIZES } from '../utils/theme';

const CloseButton = ({navigation}) => {
  return (
    <Button transparent paddingHorizontal={SIZES.base * 2} nativeFeedback onPress={() => navigation.goBack()}>
      <ImageIcon name="close" />
    </Button>
  )
}

export default withNavigation(CloseButton)
