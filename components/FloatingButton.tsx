import { Colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface FloatingButtonProps {
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
}

const FloatingButton = (props: FloatingButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.fab}
        onPress={props.onPress}
        activeOpacity={0.8}
      >
        <Ionicons name={props.icon} size={28} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
