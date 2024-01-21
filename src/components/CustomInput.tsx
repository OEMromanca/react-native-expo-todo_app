import React from "react";
import { TextInput } from "react-native";
import { CustomInputProps } from "../types/types";

class CustomInput extends React.Component<CustomInputProps> {
  render(): React.ReactNode {
    const {
      style,
      placeholder,
      onChangeText,
      value,
      focus,
      numberOfLines,
      multiline,
    } = this.props;

    return (
      <TextInput
        style={style}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        autoFocus={focus}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    );
  }
}

export default CustomInput;
