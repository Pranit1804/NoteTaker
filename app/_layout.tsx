import { initializeDatabase } from "@/db";
import { store } from "@/store/store";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function RootLayout() {
  useEffect(() => {
    initializeDatabase();
  }, []);

  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth" />
        <Stack.Screen name="home" />
        <Stack.Screen name="notes" />
      </Stack>
    </Provider>
  );
}
