import { Colors } from "@/constants";
import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface CustomTextInputProps extends TextInputProps {}

const CustomTextInput = (props: CustomTextInputProps) => {
  return <TextInput style={[styles.textInput, props.style]} {...props} />;
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: Colors.border,
    width: "100%",
    height: 48,
    paddingHorizontal: 16,
    fontSize: 16,
    borderRadius: 16,
  },
});
