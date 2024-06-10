import { ViewProps } from "react-native";
import React, { useEffect } from "react";
import { Box, useTheme } from "./Theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type ContainerProps = ViewProps & { innerPadding?: boolean };

export const Container = (props: ContainerProps) => {
  const paddingTop = useSafeAreaInsets().top;
  const { spacing } = useTheme();

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Box
        flex={1}
        style={[
          { paddingTop },
          props.innerPadding && { paddingHorizontal: spacing.m },
          props.style,
        ]}
      >
        {props.children}
      </Box>
    </Box>
  );
};
