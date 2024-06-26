import { VerificationStatus } from "models";
import React from "react";
import { VerifyIdentityButton } from "./VerifyIdentityButton";
import { Box, Text, useTheme } from "./Theme";
import { Ionicons } from "@expo/vector-icons";
import { useVerifyIdentity } from "hooks";

type UserNotVerifiedProps = {
  status: VerificationStatus;
};

export const UserNotVerified = ({ status }: UserNotVerifiedProps) => {
  const { VerifyIdentityModal, toggleVerifyIdentityModal } =
    useVerifyIdentity();
  const { radius, colors, iconSize } = useTheme();

  if (status === "none" || status === "rejected") {
    return (
      <React.Fragment>
        {status == "none" ? (
          <VerifyIdentityButton onPress={toggleVerifyIdentityModal} />
        ) : (<Box>
          <Box
            marginTop="m"
            alignItems="center"
            flexDirection="row"
            paddingVertical="m"
            paddingHorizontal="s"
            borderRadius={radius.s}
            backgroundColor="red"
          >
            <Ionicons
              color={colors.white}
              name="close"
              size={iconSize.l}
            />
            <Box marginStart="s" flex={1}>
              <Text marginTop="none" color="white" variant="button">
                Échec de la vérification
              </Text>
              <Text
                fontSize={11}
                color="white"
                fontFamily="SFProDisplaySemiBold"
              >
                La vérification d'identité pour votre compte a échoué, veuillez réssayer.
              </Text>
            </Box>
          </Box>
          <VerifyIdentityButton onPress={toggleVerifyIdentityModal} />
          </Box>
        )}
        <VerifyIdentityModal />
      </React.Fragment>
    );
  }

  if (status === "pending") {
    return (
      <Box
        marginVertical="m"
        alignItems="center"
        flexDirection="row"
        paddingVertical="m"
        paddingHorizontal="s"
        borderRadius={radius.s}
        backgroundColor="info"
      >
        <Ionicons color={colors.icon} name="time" size={iconSize.l} />
        <Box marginStart="s" flex={1}>
          <Text marginTop="none" variant="button">
            Vérification en cours
          </Text>
          <Text fontSize={11} opacity={0.7} fontFamily="SFProDisplaySemiBold">
            Votre identité en cours de vérification, veuillez patienter, cela ne
            prend que quelques minutes.
          </Text>
        </Box>
      </Box>
    );
  }

  return null;
};
