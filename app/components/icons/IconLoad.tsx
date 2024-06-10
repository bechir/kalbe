import { useTheme } from "components/Theme";
import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

export const IconLoad = (props: SvgProps) => {
  const { iconSize, colors } = useTheme();
  return (
    <Svg
      width={props.fontSize ?? iconSize.m}
      height={props.fontSize ?? iconSize.m}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
    <Circle
      r={8}
      fill="#2A4157"
      fillOpacity={0.24}
      transform="matrix(0 -1 -1 0 12 14)"
    />
    <Path
      stroke="#222"
      strokeLinecap="round"
      d="M9.5 12.5 12 15m0 0 2.5-2.5M12 15V5"
      translateY={-1}
    />
    </Svg>
  );
};
