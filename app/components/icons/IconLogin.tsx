import { useTheme } from "components/Theme";
import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

export const IconLogin = (props: SvgProps) => {
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
      d="M16.633 6.544 10.316 4.44A1 1 0 0 0 9 5.387v13.226a1 1 0 0 0 1.316.948l6.316-2.105A2 2 0 0 0 18 15.559V8.442a2 2 0 0 0-1.367-1.898Z"
    />
    <Path
      stroke="#222"
      strokeLinecap="round"
      d="M11.5 9.5 14 12m0 0-2.5 2.5M14 12H4"
    />
    </Svg>
  );
};
