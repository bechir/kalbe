import { useTheme } from "components/Theme";
import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

export const IconAlarm = (props: SvgProps) => {
  const { iconSize, colors } = useTheme();
  return (
    <Svg
      width={props.fontSize ?? iconSize.tab}
      height={props.fontSize ?? iconSize.tab}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        fill={props.color ?? colors.tint}
        fillOpacity={0.24}
        stroke={colors.icon}
        strokeWidth={1.2}
        d="M9.15 7.831a2.976 2.976 0 1 1 5.7 0l-1.563 5.211c-.07.234-.105.351-.159.447a1 1 0 0 1-.654.487C12.366 14 12.244 14 12 14c-.244 0-.366 0-.474-.024a1 1 0 0 1-.654-.487c-.054-.096-.09-.213-.16-.447L9.15 7.832Z"
      />
      <Circle
        cx={12}
        cy={19}
        r={2}
        fill={props.color ?? colors.tint}
        fillOpacity={0.24}
        stroke={colors.icon}
        strokeWidth={1.2}
      />
    </Svg>
  );
};
