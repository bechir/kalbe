import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import { Box, Text, useTheme } from "./Theme";
import { Clickable } from "./Clickable";
import { ActivityIndicator, Dimensions } from "react-native";

type ButtonProps = {
    variant?: 'light' | 'dark';
    size?: 'small' | 'default' | 'large';
    text: string;
    onPress?: () => void;
    icon?: ReactNode;
    loading?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
}

const WIDTH = Dimensions.get("window").width

export const Button = ({ text, icon, loading, variant = 'light', disabled, fullWidth, onPress }: ButtonProps) => {
  const { radius, spacing, iconSize, colors } = useTheme();
  return (
    <Clickable activeOpacity={0.8} onPress={onPress} disabled={loading || disabled}>
      <Box
        marginVertical="m"
        backgroundColor={variant == "light" ? "mainForeground" : "white"}
        borderRadius={radius.s}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        width={fullWidth ? WIDTH-30 : 255}
        opacity={disabled ? .5 : 1}
        height={55}
      >
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Text
              color={variant == "light" ? "mainBackground" : "mainForeground"}
              variant="button"
              style={{ paddingEnd: icon ? spacing.s : 0 }}
            >
              {text}
            </Text>
            {icon}
          </>
        )}
      </Box>
    </Clickable>
  );
};
