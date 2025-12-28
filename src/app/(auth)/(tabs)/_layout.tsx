import { UITheme } from "@/src/theme";
import { useTheme } from "@emotion/react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
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
        name="todo"
        options={{
          title: "Todo List",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="list-alt" size={24} color={color} />
          ),
          tabBarActiveTintColor: theme.colors.black,
        }}
      />
    </Tabs>
  );
}
