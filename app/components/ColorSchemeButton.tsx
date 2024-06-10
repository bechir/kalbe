import React from "react";

import { useColorScheme } from "./ColorSchemeContext";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { IconButton } from "./IconButton";

const ColorSchemeButton = () => {
  const { toggle, colorScheme, active } = useColorScheme();
  const tap = Gesture.Tap()
    .runOnJS(true)
    .onStart((e) => {
      if (!active) {
        toggle(e.absoluteX, e.absoluteY);
      }
    });

  return (
    <GestureDetector gesture={tap}>
      <IconButton hasBgColor icon={colorScheme === "light" ? "moon" : "sunny"}/>
    </GestureDetector>
  );
};

export default ColorSchemeButton;
