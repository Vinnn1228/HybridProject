import { CustomInput } from "@/components/CustomInput";
import { CATEGORIES } from "@/constants/data";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-cream">
      <StatusBar style="dark" />
      <ScrollView
        contentContainerClassName="px-6 pb-10 pt-4"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="flex-row justify-between items-center mb-6">
          <View>
            <Text className="text-sm text-mutedOlive mb-1">Good Morning,</Text>
            <Text className="text-[22px] font-bold text-darkGreen">Gavin</Text>
          </View>
          <TouchableOpacity
            className="w-11 h-11 rounded-full bg-copper items-center justify-center shadow-sm"
            activeOpacity={0.8}
            onPress={() => router.push("/(tabs)/profile")}
          >
            <Text className="text-white font-bold text-lg">G</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="mb-2">
          <CustomInput
            label=""
            placeholder="What service do you need?"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Promo Banner */}
        <View className="bg-surfaceSubtle border border-sageGreen rounded-[20px] p-5 mb-8 mt-2">
          <View className="bg-copper self-start px-2.5 py-1 rounded-lg mb-3">
            <Text className="text-[10px] font-bold text-white tracking-widest">
              PROMO
            </Text>
          </View>
          <Text className="text-xl font-bold text-darkGreen mb-1">
            Get 20% Off
          </Text>
          <Text className="text-[13px] text-mossGreen">
            For all AC & Refrigerator repairs
          </Text>
        </View>

        {/* Categories Grid */}
        <Text className="text-lg font-bold text-darkGreen mb-4">
          Our Services
        </Text>
        <View className="flex-row flex-wrap justify-between gap-y-4">
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              className="w-[48%] bg-surface p-4 rounded-2xl items-center border border-border shadow-sm"
              onPress={() => router.push(cat.route as any)}
              activeOpacity={0.7}
            >
              <View
                className="w-[50px] h-[50px] rounded-full items-center justify-center mb-3"
                style={{ backgroundColor: cat.color }}
              >
                {/* Ikon */}
                <Ionicons name={cat.icon as any} size={24} color="#FFF" />
              </View>
              <Text className="text-sm font-bold text-darkGreen text-center">
                {cat.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
