import Feather from "@expo/vector-icons/Feather";
import { Link, Stack } from "expo-router";

export default function ReduxSagaLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerRight: () => (
            <Link href={"/(auth)/(tabs)/redux-saga/cart"}>
              <Feather name="shopping-cart" size={24} color="black" />
            </Link>
          ),
          title: "",
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
