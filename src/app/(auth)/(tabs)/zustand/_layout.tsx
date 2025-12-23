import Feather from "@expo/vector-icons/Feather";
import { Link, Stack } from "expo-router";

export default function ZustandLayout() {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: "#fff" } }}>
      <Stack.Screen
        name="index"
        options={{
          title: "",
          headerRight: () => (
            <Link href={"/(auth)/(tabs)/zustand/cart"}>
              <Feather name="shopping-cart" size={24} color="black" />
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="cart"
        options={{
          presentation: "formSheet",
          headerShown: false,
          sheetGrabberVisible: true,
        }}
      />
    </Stack>
  );
}
