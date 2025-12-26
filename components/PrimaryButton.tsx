import { Colors } from "@/constants";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";

interface PrimaryButtonProps extends ViewProps {
  title: string;
  onPress: () => void;
}

export const PrimaryButton = ({
  title,
  style,
  onPress,
  ...viewProps
}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonStyle, style]} {...viewProps}>
        <Text style={{ color: Colors.white }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonStyle: {
    width: 150,
    height: 40,
    backgroundColor: Colors.secondary,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
