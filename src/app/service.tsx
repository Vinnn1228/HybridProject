import { PrimaryButton } from "@/components/PrimaryButton";
import { SERVICE_DETAILS } from "@/constants/data";
import { Palette } from "@/constants/palette";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ServiceScreen() {
  // Menggunakan Hooks untuk menyimpan data servis yang dirender
  // Di dunia nyata, index [0] ini akan diganti berdasarkan ID yang diklik dari Home
  const [serviceDetail] = useState(SERVICE_DETAILS[0]);

  return (
    <SafeAreaView className="flex-1 bg-cream">
      <StatusBar style="dark" />

      <ScrollView
        contentContainerClassName="pb-8"
        showsVerticalScrollIndicator={false}
      >
        {/* Header Image / Banner Area */}
        <View className="h-[260px] bg-sageGreen items-center justify-center rounded-b-[30px] relative">
          {/* Tombol Back */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="absolute top-4 left-6 w-10 h-10 bg-surface/90 rounded-full items-center justify-center shadow-sm pl-0"
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={24} color={Palette.darkGreen} />
          </TouchableOpacity>

          <Ionicons
            name="construct-outline"
            size={60}
            color={Palette.cream}
            style={{ opacity: 0.5 }}
          />
          <Text className="text-cream/80 font-bold mt-3 text-[13px] tracking-widest uppercase">
            {serviceDetail.category}
          </Text>
        </View>

        {/* Service Details Content */}
        <View className="p-6">
          <View className="self-start bg-surfaceSubtle border border-mossGreen px-3 py-1 rounded-full mb-3">
            <Text className="text-[11px] font-semibold text-mossGreen">
              {serviceDetail.category}
            </Text>
          </View>
          <Text className="text-[24px] leading-8 font-bold text-darkGreen mb-3">
            {serviceDetail.title}
          </Text>

          <View className="flex-row items-center mb-5">
            <Ionicons name="star" size={16} color={Palette.copper} />
            <Text className="text-sm font-bold text-darkGreen ml-1">
              {serviceDetail.rating}
            </Text>
            <Text className="text-sm text-mutedOlive ml-2">
              ({serviceDetail.reviews} reviews)
            </Text>
          </View>

          <View className="h-px bg-border mb-5" />

          <Text className="text-[15px] leading-6 text-mutedOlive">
            {serviceDetail.description}
          </Text>

          <View className="mt-7">
            <Text className="text-lg font-bold text-darkGreen mb-4">
              What&apos;s included
            </Text>
            {serviceDetail.includes.map((item) => (
              <View key={item} className="flex-row items-center mb-3">
                <Ionicons
                  name="checkmark-circle"
                  size={19}
                  color={Palette.mossGreen}
                />
                <Text className="text-sm text-darkGreen ml-3">{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar: Price & Book Button */}
      <View className="flex-row items-center justify-between bg-surface px-6 py-4 border-t border-border">
        <View>
          <Text className="text-xs text-mutedOlive">Starting at</Text>
          <Text className="text-lg font-bold text-darkGreen">
            {serviceDetail.price}
          </Text>
        </View>

        {/* Reusable Component Action */}
        <View className="w-[140px]">
          <PrimaryButton
            title="Book Service"
            onPress={() => router.push("/booking")}
            variant="primary"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
