import { useTheme } from "components/Theme";
import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

export const IconUser = (props: SvgProps) => {
  const { iconSize, colors } = useTheme();

  return (
    <Svg
      width={props.fontSize ?? iconSize.m}
      height={props.fontSize ?? iconSize.m}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Circle cx={12} cy={8} r={4} fill={props.color ?? colors.icon} />
      <Path
        fill={colors.icon}
        fillOpacity={0.21}
        d="M5.338 17.32C5.999 14.528 8.772 13 11.643 13h.714c2.871 0 5.644 1.527 6.305 4.32.128.541.23 1.107.287 1.682.055.55-.397.998-.949.998H6c-.552 0-1.004-.449-.949-.998.057-.575.159-1.14.287-1.681Z"
      />
    </Svg>
  );
};
