import { Fontisto } from "@expo/vector-icons";
import { Box, Clickable, Text, useTheme } from "components";
import { ASSETS } from "constants/app";
import { useUser, useUserDetails } from "hooks";
import React from "react";
import { Image } from "react-native";

type VirtualCardProps = {
  onPress: () => void;
};

const VirtualCard = ({ onPress }: VirtualCardProps) => {
  const { radius } = useTheme();
  const { state: { user } } = useUser();

  return (
    <Clickable activeOpacity={.9} onPress={onPress}>
      <Box
        opacity={.9}
        marginBottom="m"
        justifyContent="space-between"
        width={"100%"}
        height={200}
        backgroundColor="tint"
        borderRadius={radius.m}
        padding="m"
        paddingVertical="m"
      >
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image source={ASSETS.iconLight} style={{ width: 30, height: 30 }} />
          <Text color="white" variant="credit" fontSize={21}>4 462 <Text variant="small" fontSize={14} color="white">MRU</Text></Text>
        </Box>
        <Box marginVertical="m">
          <Image source={ASSETS.iconEmv} style={{ width: 48, height: 24 }} />
        </Box>
        <Text color="white" variant="mono" fontSize={15}>
          **** **** **** **** 4056
        </Text>
        <Box flexDirection="row">
          <Box marginEnd="l">
            <Text variant="mono" fontSize={10} color="white">Exp Date</Text>
            <Text variant="mono" color="white" fontSize={10}>**/**</Text>
          </Box>
          <Box>
            <Text variant="mono" fontSize={10} color="white">CVV</Text>
            <Text variant="mono" color="white" fontSize={10}>***</Text>
          </Box>
        </Box>
        <Box flexDirection="row" justifyContent="space-between">
          <Text color="white" variant="mono">{user?.fullname}</Text>
          <Image source={ASSETS.visaLogoWhite} style={{ width: 55, height: 17 }} />
        </Box>
      </Box>
    </Clickable>
  );
};

export default VirtualCard;
