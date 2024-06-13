import React, { useEffect, useState } from "react";
import Dropdown from "react-native-input-select";
import { ActivityIndicator, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { useTheme } from "components";

type UserTitleDropdownProps = {
  selected?: string | null;
  onSelect: (title: string) => void;
};

const UserTitleDropdown = ({ selected, onSelect }: UserTitleDropdownProps) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [titles, setTitles] = useState<{ label: string; value: string }[]>();

  useEffect(() => {
    setTitles(
      ["mr", "madam", "miss"].map((v) => {
        return {
          label: t(v),
          value: v,
        };
      })
    );
  }, [])

  return (
    <Dropdown
      placeholder={t("select") ?? ""}
      options={titles ?? []}
      selectedValue={selected}
      onValueChange={onSelect}
      primaryColor={colors.tint}
      dropdownStyle={{
        marginTop: 10,
        height: 45,
        borderColor: colors.muted,
        borderWidth: 1,
        alignItems: 'flex-start'
      }}
    />
  );
};

export default UserTitleDropdown;

const styles = StyleSheet.create({});
