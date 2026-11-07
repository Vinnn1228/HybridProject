import { Palette } from "@/constants/palette";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface CustomInputProps extends TextInputProps {
  label: string;
  rightIcon?: React.ReactNode;
}

export const CustomInput = ({
  label,
  rightIcon,
  ...props
}: CustomInputProps) => {
  return (
    <View className="mb-4.8">
      <View className="flex-row justify-between items-center mb-0.5">
        <Text className="text-[13px] font-semibold text-darkGreen tracking-[0.2px]">
          {label}
        </Text>
        {rightIcon}
      </View>
      <View className="border-[1.5px] border-border rounded-xl bg-surface px-3.5">
        <TextInput
          className="h-12 text-[15px] text-darkGreen"
          placeholderTextColor={Palette.mutedOlive}
          {...props}
        />
      </View>
    </View>
  );
};
