import { useTheme } from "components/Theme";
import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";

export const IconWallet = (props: SvgProps) => {
  const { iconSize, colors } = useTheme();
  return (
    <Svg
      width={props.fontSize ?? iconSize.m}
      height={props.fontSize ?? iconSize.m}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        fill="#2A4157"
        fillOpacity={0.24}
        d="M3 10c0-2.828 0-4.243.879-5.121C4.757 4 6.172 4 9 4h6c2.828 0 4.243 0 5.121.879C21 5.757 21 7.172 21 10v1.7c0 .141 0 .212-.044.256-.044.044-.115.044-.256.044h-4.2c-.465 0-.697 0-.89.038a2 2 0 0 0-1.572 1.572c-.038.193-.038.425-.038.89s0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038h4.357c.079 0 .143.064.143.143A2.857 2.857 0 0 1 18.143 20H9c-2.828 0-4.243 0-5.121-.879C3 18.243 3 16.828 3 14v-4Z"
      />
      <Path
        fill="#222"
        d="M14 14a2 2 0 0 1 2-2h4.85a.15.15 0 0 1 .15.15v4.7a.15.15 0 0 1-.15.15H16a2 2 0 0 1-2-2v-1Z"
      />
      <Rect width={6} height={1} x={6} y={7} fill="#222" rx={0.5} />
    </Svg>
  );
};
