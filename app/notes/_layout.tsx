import { Colors } from "@/constants";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotesRootLayout() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.primaryLight }}
      edges={["top", "left", "right"]}
    >
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AddNotes" />
      </Stack>
    </SafeAreaView>
  );
}
