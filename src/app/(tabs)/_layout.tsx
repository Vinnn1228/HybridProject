import { Palette } from "@/constants/palette";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Tabs } from "expo-router";
import { Component } from "react";

export default class TabLayout extends Component {
  render() {
    return (
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Palette.copper,
          tabBarInactiveTintColor: Palette.mutedOlive,
          tabBarStyle: {
            backgroundColor: Palette.surface,
            borderTopColor: Palette.border,
            height: 50,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "bold",
          },
        }}
      >
        {/*Home*/}
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />

        {/*History*/}
        <Tabs.Screen
          name="history"
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <Ionicons name="time-outline" size={22} color={color} />
            ),
          }}
        />

        {/*Profile*/}
        <Tabs.Screen
          name="profile"
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />
      </Tabs>
    );
  }
}
