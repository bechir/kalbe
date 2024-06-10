import type { ComponentProps } from "react";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Box, Theme, useTheme } from "./Theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Clickable } from "./Clickable";

interface IconButtonProps {
  icon?: ComponentProps<typeof Ionicons>["name"];
  matIcon?: ComponentProps<typeof MaterialIcons>["name"];
  onPress?: () => void;
  color?: keyof Theme['colors']
  inactive?: boolean;
  size?: keyof Theme['iconSize'];
  hasBgColor?: boolean;
  inverse?: boolean;
}

const SIZES = {
  s: 30,
  m: 45,
  l: 70,
  tab: 50,
  xl: 145,
  xxl: 200
}

export const IconButton = ({ icon, matIcon, color, size, hasBgColor, inactive, inverse, onPress }: IconButtonProps) => {
  const theme = useTheme();
  const [iconColor, setIconColor] = useState(theme.colors.mainForeground);
  const [backgroundColor, setBackgroundColor] = useState<keyof typeof theme.colors>("secondaryBackground");

  useEffect(() => {
    if(color) {
      setIconColor(theme.colors[color])
    }

    if(inverse) {
      !color && setIconColor(theme.colors.mainBackground);
      setBackgroundColor("mainForeground");
    }
  }, []);

  return (
    <Clickable onPress={onPress}>
      <Box
        justifyContent="center"
        alignItems="center"
        {... hasBgColor && {backgroundColor}}
        borderRadius={100}
        width={SIZES[size ?? "m"]}
        height={SIZES[size ?? "m"]}
        opacity={inactive ? .4 : 1}
      >
        {icon && <Ionicons name={icon} size={theme.iconSize[size ?? 's']} color={iconColor} />}
        {matIcon && <MaterialIcons name={matIcon} size={theme.iconSize[size ?? 's']} color={iconColor} />}
      </Box>
    </Clickable>
  );
};
