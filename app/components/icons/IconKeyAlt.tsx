import { useTheme } from "components/Theme";
import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

export const IconKeyAlt = (props: SvgProps) => {
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
        d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-2Z"
      />
      <Circle cx={8.5} cy={11.5} r={2} stroke="#222" />
      <Path
        stroke="#222"
        strokeLinecap="round"
        d="M10.5 11.5h5m2 2v-1.85a.15.15 0 0 0-.15-.15H15.5m0 0v2"
      />
    </Svg>
  );
};
