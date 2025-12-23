import { ThemeProvider } from "@emotion/react";
import { Stack } from "expo-router";
import { theme } from "../theme";
export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
