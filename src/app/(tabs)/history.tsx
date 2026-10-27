import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// 1. Tipe data untuk masing-masing pesanan
interface Booking {
  id: string;
  title: string;
  category: string;
  date: string;
  price: string;
  status: "Upcoming" | "Completed";
}

// 2. Tipe data untuk State Class (Menyimpan tab yang sedang aktif)
interface HistoryState {
  activeTab: "Upcoming" | "Completed";
}

type HistoryProps = Record<string, never>;

export default class HistoryScreen extends Component<
  HistoryProps,
  HistoryState
> {
  constructor(props: HistoryProps) {
    super(props);
    // Secara default tab "Upcoming" yang akan terbuka pertama kali
    this.state = {
      activeTab: "Upcoming",
    };
  }

  // Data Dummy/Mockup untuk riwayat pesanan
  bookings: Booking[] = [
    {
      id: "INV-001",
      title: "AC & Refrigerator Repair",
      category: "Appliance Repair",
      date: "Oct 28, 2026 - 10:00 AM",
      price: "$45.00",
      status: "Upcoming",
    },
    {
      id: "INV-002",
      title: "Deep Home Cleaning",
      category: "Cleaning",
      date: "Oct 30, 2026 - 02:00 PM",
      price: "$60.00",
      status: "Upcoming",
    },
    {
      id: "INV-003",
      title: "Leaking Pipe Fix",
      category: "Plumbing",
      date: "Oct 10, 2026 - 11:30 AM",
      price: "$35.00",
      status: "Completed",
    },
    {
      id: "INV-004",
      title: "Circuit Breaker Repair",
      category: "Electrical",
      date: "Sep 28, 2026 - 09:00 AM",
      price: "$50.00",
      status: "Completed",
    },
  ];

  // Method untuk mengubah tab
  setTab = (tab: "Upcoming" | "Completed") => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;

    // Menyaring data berdasarkan tab yang sedang diklik
    const filteredBookings = this.bookings.filter(
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
            onPress={() => this.setTab("Upcoming")}
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
            onPress={() => this.setTab("Completed")}
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
                {/* Bagian Atas Card (Kategori & ID) */}
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

                {/* Bagian Bawah Card (Harga & Tombol Aksi) */}
                <View className="flex-row justify-between items-center pt-3.5 border-t border-border">
                  <Text className="text-base font-bold text-copper">
                    {item.price}
                  </Text>

                  {/* Tombol akan berubah tergantung status pesanan */}
                  {activeTab === "Upcoming" ? (
                    <TouchableOpacity className="bg-surfaceSubtle border border-mossGreen px-4 py-2 rounded-lg">
                      <Text className="text-[13px] font-bold text-mossGreen">
                        Track
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity className="bg-surfaceSubtle border border-border px-4 py-2 rounded-lg">
                      <Text className="text-[13px] font-bold text-mutedOlive">
                        Rebook
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ))
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
