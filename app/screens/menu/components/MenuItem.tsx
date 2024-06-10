import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Box, Clickable, IconButton, Text, Theme, useTheme } from "components";
import { StyleSheet } from "react-native";

type MenuItemProps = {
  text: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  hasTopBorder?: boolean;
  hasArrow?: boolean;
  color?: keyof Theme["colors"];

  onPress?: () => void;
};

export const MenuItem = ({
  text,
  icon,
  hasTopBorder,
  hasArrow,
  color,
  onPress,
}: MenuItemProps) => {
  const { spacing } = useTheme();

  return (
    <Box
      marginTop="m"
      borderTopColor="muted"
      style={
        hasTopBorder && {
          borderTopWidth: StyleSheet.hairlineWidth,
          paddingTop: spacing.m,
        }
      }
    >
      <Clickable
        onPress={onPress}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <IconButton
          icon={icon}
          size="s"
          hasBgColor
          color={color ?? "icon"}
        />
        <Text variant="button" paddingStart="s" color={color}>
          {text}
        </Text>
        {hasArrow && <Box alignItems="flex-end" opacity={.5} flex={1}><IconButton icon="chevron-forward" /></Box>}
      </Clickable>
    </Box>
  );
};
