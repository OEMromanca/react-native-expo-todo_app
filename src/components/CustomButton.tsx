import React from "react";
import { Text, Pressable } from "react-native";
import { CustomButtonProps } from "../types/types";

class CustomButton extends React.Component<CustomButtonProps> {
  render(): React.ReactNode {
    const { onPress, title, pressableStyle, textStyle, disabled } = this.props;

    return (
      <Pressable onPress={onPress} style={pressableStyle} disabled={disabled}>
        <Text style={textStyle}>{title}</Text>
      </Pressable>
    );
  }
}

export default CustomButton;
