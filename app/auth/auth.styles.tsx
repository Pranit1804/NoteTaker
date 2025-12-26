import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loginRoot: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: Colors.primaryLight,
  },

  loginText: { paddingBottom: 4, textAlign: "center" },
  loginImage: {
    height: 150,
    width: 150,
    marginBottom: 20,
    alignSelf: "center",
  },
  loginSubtitle: {
    paddingBottom: 44,
    textAlign: "center",
    color: Colors.textSecondary,
  },
});
