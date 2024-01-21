import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TIconProps } from "../types/types";
import { IconNamesMap } from "../utils/filterMaps";

class AntDesignIcon extends React.Component<TIconProps> {
  render(): React.ReactNode {
    const { name, size, color, style } = this.props;
    return (
      <AntDesign
        name={IconNamesMap[name]}
        size={size}
        color={color}
        style={style}
      />
    );
  }
}

export default AntDesignIcon;
