import { useTheme } from "components/Theme";
import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";

export const IconUpload = (props: SvgProps) => {
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
        fillRule="evenodd"
        d="M6 13h12a3 3 0 1 0 0-6c-.28 0-.42 0-.517-.02-.298-.06-.44-.151-.616-.399-.058-.08-.14-.262-.303-.626a5 5 0 0 0-9.128 0c-.163.364-.245.545-.303.626-.176.248-.318.34-.616.4C6.419 7 6.28 7 6 7a3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#222"
        strokeLinecap="round"
        d="M9.5 11.5 12 9m0 0 2.5 2.5M12 9v10"
      />
    </Svg>
  );
};
