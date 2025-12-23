import { UITheme } from "@/src/theme";
import { useTheme } from "@emotion/react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const theme = useTheme() as UITheme;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          paddingTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="zustand"
        options={{
          title: "Zustand",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="circle-dot" size={24} color={color} />
          ),
          tabBarActiveTintColor: theme.colors.black,
        }}
      />
      <Tabs.Screen
        name="redux-toolkit"
        options={{
          title: "Toolkit",
          tabBarIcon: ({ color }) => (
            <Fontisto name="redux" size={24} color={color} />
          ),
          tabBarActiveTintColor: theme.colors.darkPink,
        }}
      />
      <Tabs.Screen
        name="redux-saga"
        options={{
          title: "Redux-Saga",
          tabBarIcon: ({ color }) => (
            <Fontisto name="redux" size={24} color={color} />
          ),
          tabBarActiveTintColor: theme.colors.darkGreen,
        }}
      />
    </Tabs>
  );
}
