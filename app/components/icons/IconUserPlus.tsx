import { useTheme } from "components/Theme";
import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

export const IconUserPlus = (props: SvgProps) => {
  const { iconSize, colors } = useTheme();
  return (
    <Svg
      width={props.fontSize ?? iconSize.m}
      height={props.fontSize ?? iconSize.m}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Circle cx={10} cy={10} r={4} fill="#2A4157" fillOpacity={0.24} />
      <Path
        fill="#2A4157"
        fillOpacity={0.24}
        fillRule="evenodd"
        d="M16.221 18.246c.058.097.04.22-.041.297A8.97 8.97 0 0 1 10 21a8.969 8.969 0 0 1-6.18-2.457.239.239 0 0 1-.04-.297C4.942 16.318 7.291 15 10 15c2.708 0 5.057 1.318 6.221 3.246Z"
        clipRule="evenodd"
      />
      <Path stroke="#222" strokeLinecap="round" d="M18.5 10.5v6M15.5 13.5h6" />
    </Svg>
  );
};
