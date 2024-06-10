import { useTheme } from "components/Theme";
import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

export const IconLogout = (props: SvgProps) => {
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
        d="m10.367 6.544 6.317-2.105A1 1 0 0 1 18 5.387v13.226a1 1 0 0 1-1.316.948l-6.317-2.105A2 2 0 0 1 9 15.559V8.442a2 2 0 0 1 1.367-1.898Z"
      />
      <Path
        stroke="#222"
        strokeLinecap="round"
        d="M6.5 9.5 4 12m0 0 2.5 2.5M4 12h10"
      />
    </Svg>
  );
};

