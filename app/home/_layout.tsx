import { Colors } from "@/constants";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeRootLayout() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.primaryLight }}
      edges={["top", "left", "right"]}
    >
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </SafeAreaView>
  );
}
