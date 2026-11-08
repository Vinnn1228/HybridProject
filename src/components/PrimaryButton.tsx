import { Text, TouchableOpacity, ViewStyle } from "react-native";

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "outline-moss" | "outline-gray";
  style?: ViewStyle;
}

export const PrimaryButton = ({
  title,
  onPress,
  variant = "primary",
  style,
}: PrimaryButtonProps) => {
  // Variant
  let buttonStyle = "bg-copper py-3.5 rounded-xl items-center shadow-sm";
  let textStyle = "text-white text-[15px] font-bold tracking-[0.4px]";

  if (variant === "outline-moss") {
    buttonStyle =
      "bg-surfaceSubtle border border-mossGreen px-4 py-2 rounded-lg items-center";
    textStyle = "text-[13px] font-bold text-mossGreen";
  } else if (variant === "outline-gray") {
    buttonStyle =
      "bg-surfaceSubtle border border-border px-4 py-2 rounded-lg items-center";
    textStyle = "text-[13px] font-bold text-mutedOlive";
  }

  return (
    <TouchableOpacity
      className={buttonStyle}
      style={style}
      activeOpacity={0.88}
      onPress={onPress}
    >
      <Text className={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
