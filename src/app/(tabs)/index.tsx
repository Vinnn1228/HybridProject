import { Palette } from "@/constants/palette";
import { router } from "expo-router";
import { Component } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface HomeState {
  searchQuery: string;
}

type HomeProps = Record<string, never>;

export default class HomeScreen extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);

    this.state = {
      searchQuery: "",
    };
  }

  categories = [
    { id: 1, name: "Appliance Repair", desc: "AC, Kulkas, TV", icon: "❄️" },
    { id: 2, name: "Plumbing", desc: "Pipa & Saluran Air", icon: "🔧" },
    { id: 3, name: "Electrical", desc: "Kabel & Listrik", icon: "⚡" },
    { id: 4, name: "Cleaning", desc: "Rumah & Halaman", icon: "🧹" },
  ];

  handleSearch = (text: string) => {
    this.setState({ searchQuery: text });
  };

  render() {
    return (
      <SafeAreaView className="flex-1 bg-cream">
        <StatusBar barStyle="dark-content" backgroundColor={Palette.cream} />
        <ScrollView
          contentContainerClassName="px-6 pb-10 pt-4"
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View className="flex-row justify-between items-center mb-6">
            <View>
              <Text className="text-sm text-mutedOlive mb-1">
                Good Morning,
              </Text>
              <Text className="text-[22px] font-bold text-darkGreen">
                Alexander
              </Text>
            </View>
            <TouchableOpacity
              className="w-11 h-11 rounded-full bg-copper items-center justify-center shadow-sm"
              activeOpacity={0.8}
              onPress={() => router.push("/(tabs)/profile")}
            >
              <Text className="text-white font-bold text-lg">A</Text>
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View className="mb-6">
            <TextInput
              className="bg-surface border border-border rounded-xl h-[50px] px-4 text-[15px] text-darkGreen shadow-sm"
              placeholder="What service do you need?"
              placeholderTextColor={Palette.mutedOlive}
              value={this.state.searchQuery}
              onChangeText={this.handleSearch}
            />
          </View>

          {/* Promo Banner */}
          <View className="bg-surfaceSubtle border border-sageGreen rounded-[20px] p-5 mb-8">
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
            {this.categories.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                className="w-[48%] bg-surface p-4 rounded-2xl items-center border border-border shadow-sm"
                onPress={() => router.push("/service")}
                activeOpacity={0.7}
              >
                <View className="w-[50px] h-[50px] rounded-full bg-surfaceSubtle items-center justify-center mb-3">
                  <Text className="text-2xl">{cat.icon}</Text>
                </View>
                <Text className="text-sm font-bold text-darkGreen text-center">
                  {cat.name}
                </Text>
                <Text className="text-[11px] text-mutedOlive mt-1 text-center">
                  {cat.desc}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
