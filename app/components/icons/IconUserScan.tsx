import { useTheme } from "components/Theme";
import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

export const IconUserScan = (props: SvgProps) => {
  const { iconSize, colors } = useTheme();

  return (
    <Svg
      width={props.fontSize ?? iconSize.m}
      height={props.fontSize ?? iconSize.m}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <Circle cx={12} cy={9} r={3} fill={props.color ?? colors.tint} />
      <Path
        fill={colors.icon}
        fillOpacity={0.24}
        fillRule="evenodd"
        d="M17.451 15.908a.237.237 0 0 1-.067.304A8.96 8.96 0 0 1 12 18a8.96 8.96 0 0 1-5.384-1.788.237.237 0 0 1-.067-.304C7.499 14.192 9.582 13 12 13c2.418 0 4.501 1.191 5.451 2.908Z"
        clipRule="evenodd"
      />
      <Path
        stroke={props.color ?? colors.tint}
        strokeLinecap="round"
        d="M17.5 3.5h.2c1.791 0 2.687 0 3.244.556.556.557.556 1.453.556 3.244v.2M17.5 20.5h.2c1.791 0 2.687 0 3.244-.556.556-.557.556-1.453.556-3.244v-.2M6.5 3.5h-.2c-1.791 0-2.687 0-3.243.556C2.5 4.614 2.5 5.51 2.5 7.3v.2M6.5 20.5h-.2c-1.791 0-2.687 0-3.243-.556C2.5 19.387 2.5 18.49 2.5 16.7v-.2"
      />
    </Svg>
  );
};
