import { Text, TouchableOpacity } from "react-native";

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
}

export const PrimaryButton = ({ title, onPress }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      className="bg-copper py-3.5 rounded-xl items-center mt-2 mb-4.5 shadow-sm"
      activeOpacity={0.88}
      onPress={onPress}
    >
      <Text className="text-white text-[15px] font-bold tracking-[0.4px]">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
