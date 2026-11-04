import { Palette } from "@/constants/palette";
import { Ionicons, type IoniconsIconName } from "@react-native-vector-icons/ionicons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ProfileProps = Record<string, never>;

// State dibiarkan kosong untuk saat ini, nantinya bisa diisi data user dari database
type ProfileState = Record<string, never>;

export default class ProfileScreen extends Component<
  ProfileProps,
  ProfileState
> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {};
  }

  // Fungsi untuk mensimulasikan proses Log Out
  handleLogout = () => {
    // Nantinya di sini Anda bisa menambahkan kode untuk menghapus token/session
    router.replace("/(auth)/login");
  };

  // Fungsi bantuan (Helper) untuk membuat baris menu agar kode tidak berulang
  renderMenuItem = (
    iconName: IoniconsIconName,
    title: string,
    isDestructive = false,
  ) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row items-center justify-between py-4 border-b border-border"
        onPress={isDestructive ? this.handleLogout : undefined}
      >
        <View className="flex-row items-center gap-4">
          <View
            className={`w-9 h-9 rounded-full items-center justify-center ${isDestructive ? "bg-[#FDF2F2]" : "bg-surfaceSubtle"}`}
          >
            <Ionicons
              name={iconName}
              size={18}
              color={isDestructive ? Palette.error : Palette.mossGreen}
            />
          </View>
          <Text
            className={`text-[15px] font-semibold ${isDestructive ? "text-error" : "text-darkGreen"}`}
          >
            {title}
          </Text>
        </View>
        {!isDestructive && (
          <Ionicons
            name="chevron-forward"
            size={20}
            color={Palette.mutedOlive}
          />
        )}
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView className="flex-1 bg-cream">
        <StatusBar style="dark" />

        {/* Header Title */}
        <View className="px-6 py-4 bg-cream border-b border-border">
          <Text className="text-[22px] font-bold text-darkGreen">
            My Profile
          </Text>
        </View>

        <ScrollView
          contentContainerClassName="px-6 pb-20 pt-5"
          showsVerticalScrollIndicator={false}
        >
          {/* User Identity Card */}
          <View className="bg-surface rounded-2xl p-5 mb-7 border border-border shadow-sm flex-row items-center gap-4">
            <View className="w-[60px] h-[60px] rounded-full bg-copper items-center justify-center shadow-sm">
              <Text className="text-white font-bold text-[24px]">G</Text>
            </View>
            <View className="flex-1">
              <Text className="text-[18px] font-bold text-darkGreen mb-0.5">
                Gavin
              </Text>
              <Text className="text-[13px] text-mutedOlive">
                gavin@binus.ac.id
              </Text>
              <Text className="text-[13px] text-mutedOlive mt-0.5">
                +62 812-3456-7890
              </Text>
            </View>
            <TouchableOpacity className="bg-surfaceSubtle px-3 py-1.5 rounded-lg border border-sageGreen">
              <Text className="text-[11px] font-bold text-mossGreen">EDIT</Text>
            </TouchableOpacity>
          </View>

          {/* Account Settings Section */}
          <Text className="text-[12px] font-bold text-mutedOlive mb-2 tracking-[0.5px] uppercase">
            Account Settings
          </Text>
          <View className="bg-surface rounded-2xl px-5 border border-border shadow-sm mb-6">
            {this.renderMenuItem("location-outline", "My Addresses")}
            {this.renderMenuItem("card-outline", "Payment Methods")}
            {this.renderMenuItem("notifications-outline", "Notifications")}
          </View>

          {/* General Section */}
          <Text className="text-[12px] font-bold text-mutedOlive mb-2 tracking-[0.5px] uppercase">
            General
          </Text>
          <View className="bg-surface rounded-2xl px-5 border border-border shadow-sm mb-6">
            {this.renderMenuItem("help-circle-outline", "Help & Support")}
            {this.renderMenuItem("document-text-outline", "Terms of Service")}
            {this.renderMenuItem("shield-checkmark-outline", "Privacy Policy")}
          </View>

          {/* Logout Button */}
          <View className="bg-surface rounded-2xl px-5 border border-[#F8B4B4] shadow-sm mb-6">
            {this.renderMenuItem("log-out-outline", "Log Out", true)}
          </View>

          <Text className="text-center text-[12px] text-mutedOlive font-medium mb-4">
            App Version 1.0.0
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
