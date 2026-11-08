import { PrimaryButton } from "@/components/PrimaryButton";
import { BOOKINGS } from "@/constants/data";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// State type
type TabStatus = "Upcoming" | "Completed";

export default function HistoryScreen() {
  const [activeTab, setActiveTab] = useState<TabStatus>("Upcoming");
  const filteredBookings = BOOKINGS.filter(
    (booking) => booking.status === activeTab,
  );

  return (
    <SafeAreaView className="flex-1 bg-cream">
      <StatusBar style="dark" />

      {/* Header Title */}
      <View className="px-6 py-4 bg-cream border-b border-border">
        <Text className="text-[22px] font-bold text-darkGreen">
          Booking History
        </Text>
      </View>

      {/* Tab Switcher (Upcoming vs Completed) */}
      <View className="flex-row px-6 py-4 gap-3">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setActiveTab("Upcoming")}
          className={`flex-1 py-3 items-center rounded-xl border ${
            activeTab === "Upcoming"
              ? "bg-copper border-copper shadow-sm"
              : "bg-surface border-border"
          }`}
        >
          <Text
            className={`text-[13px] font-bold ${
              activeTab === "Upcoming" ? "text-white" : "text-mutedOlive"
            }`}
          >
            Upcoming
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setActiveTab("Completed")}
          className={`flex-1 py-3 items-center rounded-xl border ${
            activeTab === "Completed"
              ? "bg-copper border-copper shadow-sm"
              : "bg-surface border-border"
          }`}
        >
          <Text
            className={`text-[13px] font-bold ${
              activeTab === "Completed" ? "text-white" : "text-mutedOlive"
            }`}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      {/* List Pesanan */}
      <ScrollView
        contentContainerClassName="px-6 pb-20 pt-2"
        showsVerticalScrollIndicator={false}
      >
        {filteredBookings.length === 0 ? (
          <View className="mt-10 items-center">
            <Text className="text-mutedOlive text-[15px]">
              No {activeTab.toLowerCase()} bookings found.
            </Text>
          </View>
        ) : (
          filteredBookings.map((item) => (
            <View
              key={item.id}
              className="bg-surface rounded-2xl p-5 mb-4 border border-border shadow-sm"
            >
              {/* Kategori & ID */}
              <View className="flex-row justify-between items-center mb-3">
                <Text className="text-[11px] font-bold text-mossGreen tracking-[1px] uppercase">
                  {item.category}
                </Text>
                <Text className="text-[11px] font-semibold text-mutedOlive">
                  {item.id}
                </Text>
              </View>

              {/* Judul & Tanggal */}
              <Text className="text-[17px] font-bold text-darkGreen mb-1.5">
                {item.title}
              </Text>
              <Text className="text-[13px] text-mutedOlive mb-4">
                {item.date}
              </Text>

              {/* Harga & Tombol Aksi */}
              <View className="flex-row justify-between items-center pt-3.5 border-t border-border">
                <Text className="text-base font-bold text-copper">
                  {item.price}
                </Text>

                {/* PrimaryButton */}
                {activeTab === "Upcoming" ? (
                  <PrimaryButton
                    title="Track"
                    variant="outline-moss"
                    onPress={() => {}}
                  />
                ) : (
                  <PrimaryButton
                    title="Rebook"
                    variant="outline-gray"
                    onPress={() => {}}
                  />
                )}
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
