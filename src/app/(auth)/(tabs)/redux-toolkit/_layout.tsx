import Feather from "@expo/vector-icons/Feather";
import { Link, Stack } from "expo-router";

export default function ReduxToolkitLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Toolkit Store",
          headerRight: () => (
            <Link href={"/(auth)/(tabs)/redux-toolkit/cart"}>
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
