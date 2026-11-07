import { Palette } from "@/constants/palette";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Text, View } from "react-native";

interface AlertBoxProps {
  type: "error" | "success";
  message: string;
}

export const AlertBox = ({ type, message }: AlertBoxProps) => {
  if (!message) return null;
  const isError = type === "error";

  return (
    <View
      className={`border py-2.5 px-3.5 rounded-lg mb-4 flex-row items-center gap-2 ${
        isError
          ? "bg-[#FDF2F2] border-[#F8B4B4]"
          : "bg-surfaceSubtle border-mossGreen"
      }`}
    >
      <Ionicons
        name={isError ? "alert-circle" : "checkmark-circle"}
        size={18}
        color={isError ? Palette.error : Palette.darkGreen}
      />
      <Text
        className={`text-[13px] flex-1 ${
          isError ? "text-error font-medium" : "text-darkGreen font-semibold"
        }`}
      >
        {message}
      </Text>
    </View>
  );
};
