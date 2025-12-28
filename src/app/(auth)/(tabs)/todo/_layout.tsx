import { Stack } from "expo-router";

export default function ReduxSagaLayout() {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: "#fff" } }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Todo List",
        }}
      />
    </Stack>
  );
}
