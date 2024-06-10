import { useTheme } from "components/Theme";
import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

export const IconPlus = (props: SvgProps) => {
  const { iconSize, colors } = useTheme();
  return (
    <Svg
      width={props.fontSize ?? iconSize.m}
      height={props.fontSize ?? iconSize.m}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Circle cx={12} cy={12} r={9} fill="#2A4157" fillOpacity={0.24} />
      <Path
        stroke="#222"
        strokeLinecap="square"
        strokeWidth={1.2}
        d="M12 15V9M15 12H9"
      />
    </Svg>
  );
};

