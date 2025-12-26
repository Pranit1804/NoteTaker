import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.primaryLight,
    padding: 12,
  },

  noteItemRoot: {
    flexDirection: "row",
    height: 100,
    paddingRight: 12,
    marginBottom: 12,
    width: "100%",
    backgroundColor: Colors.white,
    elevation: 4,
    shadowColor: Colors.border,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    borderRadius: 16,
  },

  verticalBorder: {
    marginLeft: 12,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    width: 6,
    borderRadius: 12,
    backgroundColor: Colors.primary,
  },

  noteText: { flex: 1, marginLeft: 12, marginTop: 4 },
});
