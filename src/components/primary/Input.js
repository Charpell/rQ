import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons'

import expoTheme from "../../utils/theme";
import { rgba, mergeTheme } from "../../utils";
import { theme } from '../../constants'

import Block from './Block';
import Text from './Text';
import Button from './Button'

const { SIZES, COLORS } = theme

/**
 * https://facebook.github.io/react-native/docs/textinput
 *
 * Validation
 * onValidation return a single boolean or object with boolean values
 * pattern using regex string for validating the value
 *
 * single pattern to validate the value
 * <Input
 *   pattern="/\d/" // validate digits
 *   onValidation={isValid => console.log(isValid)}
 * />
 *
 * multiple pattern to validate the value
 * <Input
 *   pattern={[ "/\d/", "/\w/"]} // validate digits and words
 *   onValidation={isValid => console.log(isValid)}
 * />
 *
 * Border color using color prop
 * <Input color="red" />
 *
 * Pass ref from props using internalRef reference
 * <Input internalRef={c => this.c} />
 */

class Input extends Component {
  state = {
    value: null,
    focused: false,
    blurred: false,
    toggleSecure: false
  };

  renderLabel = () => {
    const { label, error } = this.props

    return (
      <Block flex={false}>
        {label ? <Text gray2={!error} error={error} subtitle>{label}</Text> : null}
      </Block>
    )
  }

  renderToggle() {
    const { secure } = this.props;
    const { toggleSecure } = this.state;

    if (!secure) return null;

    return (
      <Button
        style={styles.toggle}
        onPress={() => this.setState({ toggleSecure: !toggleSecure })}
      >
        <Ionicons
            color={COLORS.gray2}
            size={SIZES.font * 1.35}
            name={!toggleSecure ? "md-eye" : "md-eye-off"}
        />
      </Button>
    );
  }

  handleValidation(value) {
    const { pattern } = this.props;
    if (!pattern) return true;

    // string pattern, one validation rule
    if (typeof pattern === "string") {
      const condition = new RegExp(pattern, "g");
      return condition.test(value);
    }

    // array patterns, multiple validation rules
    if (typeof pattern === "object") {
      const conditions = pattern.map(rule => new RegExp(rule, "g"));
      return conditions.map(condition => condition.test(value));
    }
  }

  handleChange(value) {
    const { onChangeText, onValidation } = this.props;
    const isValid = this.handleValidation(value);

    this.setState({ value }, () => {
      onValidation && onValidation(isValid);
      onChangeText && onChangeText(value);
    });
  }

  handleFocus(event) {
    const { onFocus } = this.props;
    this.setState({ focused: true, blurred: false }, () => {
      onFocus && onFocus(event);
    });
  }

  handleBlur(event) {
    const { onBlur } = this.props;
    this.setState({ focused: false, blurred: true }, () => {
      onBlur && onBlur(event);
    });
  }

  handleTextType(type) {
    return type === "email"
      ? "emailAddress"
      : type === "phone"
      ? "telephoneNumber"
      : type;
  }

  render() {
    const {
      autoCorrect,
      autoCapitalize,
      placeholder,
      children,
      color,
      type,
      style,
      theme,
      internalRef,
      secure,
      ...props
    } = this.props;
    const { toggleSecure } = this.state
    const isSecure = toggleSecure ? false : secure
    const { SIZES, COLORS } = mergeTheme({ ...expoTheme }, theme);

    const textStyles = StyleSheet.flatten([
      {
        borderWidth: 1,
        height: SIZES.base * 5.5,
        borderRadius: SIZES.radius,
        borderColor: rgba(color || COLORS.primary, 0.4),
        // paddingHorizontal: SIZES.base,
        fontSize: SIZES.font
      },
      style
    ]);
    const textType = this.handleTextType(type);

    const internalProps = {
      style: textStyles,
      autoCorrect,
      autoCapitalize,
      placeholder,
      textContentType: textType,
      value: this.state.value,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onChangeText: this.handleChange,
      secureTextEntry: isSecure
    };
    
    

    return (
      <Block flex={false} margin={[SIZES.base, 0]}>
        {this.renderLabel()}
        <TextInput ref={internalRef} {...internalProps} {...props}>
          {children}
        </TextInput>
        {this.renderToggle()}
      </Block>
    );
  }
}

Input.defaultProps = {
  pattern: null,
  onFocus: null,
  onBlur: null,
  onChange: null,
  onValidation: null,
  placeholder: null,
  autoCorrect: false,
  autoCapitalize: "none",
  color: null,
  internalRef: null,
  theme: {},
  style: {},
  label: null,
  error: null,
  secure: false
};

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.black,
    borderRadius: SIZES.radius,
    fontSize: SIZES.font,
    fontWeight: '500',
    color: COLORS.black,
    height: SIZES.base * 3,
  },
  toggle: {
    position: 'absolute',
    alignItems: 'flex-end',
    width: SIZES.base * 2,
    height: SIZES.base * 2,
    top: 30,
    right: 0,
    backgroundColor: 'white'
  }
});

export default Input;
