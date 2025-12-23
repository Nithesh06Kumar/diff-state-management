import { ThemeProvider } from "@emotion/react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../stateglobal/toolkit/store";
import { theme } from "../theme";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
    </Provider>
  );
}
