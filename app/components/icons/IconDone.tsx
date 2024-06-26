import { useTheme } from "components/Theme";
import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

export const IconDone = (props: SvgProps) => {
  const { iconSize, colors } = useTheme();
  return (
    <Svg
      width={props.fontSize ?? iconSize.m}
      height={props.fontSize ?? iconSize.m}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Circle cx={12} cy={12} r={8} fill={props.color ?? colors.success} fillOpacity={0.24} />
      <Path
        stroke={props.color ?? colors.success}
        strokeLinecap="round"
        strokeWidth={1.2}
        d="m8.5 11 2.293 2.293a1 1 0 0 0 1.414 0L19.5 6"
      />
    </Svg>
  );
};
