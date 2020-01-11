import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import Block from './Block';
import theme from '../../constants/theme'

export default class Badge extends Component {
  render() {
    const { children, style, size, color, ...props } = this.props;

    const badgeStyles = StyleSheet.flatten([
      styles.badge,
      size && {
        height: size,
        width: size,
        borderRadius: size,
      },
      style,
    ]);

    return (
      <Block flex={false} middle center color={color} style={badgeStyles} {...props}>
        {children}
      </Block>
    )
  }
}

const styles = StyleSheet.create({
  badge: {
    height: theme.SIZES.base,
    width: theme.SIZES.base,
    borderRadius: theme.SIZES.border,
  }
})
