import { useTheme } from "components/Theme";
import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

export const IconLock = (props: SvgProps) => {
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
        fill={props.color ?? colors.icon}
        fillOpacity={0.24}
        d="M4 12c0-.943 0-1.414.293-1.707C4.586 10 5.057 10 6 10h12c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v6.038c0 .38 0 .571-.029.74a2 2 0 0 1-1.164 1.49c-.156.07-.341.116-.71.208-1.238.31-1.857.464-2.476.578-2.394.44-4.848.44-7.243 0-.618-.114-1.237-.269-2.474-.578-.37-.092-.555-.139-.71-.207a2 2 0 0 1-1.165-1.492C4 18.61 4 18.42 4 18.037V12Z"
      />
      <Path stroke={colors.tint} d="M16.5 10V9a4.5 4.5 0 0 0-9 0v1" />
      <Circle cx={12} cy={15} r={2} fill={colors.tint} />
      <Path stroke={colors.tint} strokeLinecap="round" d="M12 16v2.5" />
    </Svg>
  );
};
