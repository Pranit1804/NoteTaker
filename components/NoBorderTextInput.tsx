import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

export enum TextInputType {
  TITLE,
  TEXT,
}

interface NoBorderTextInputProps extends TextInputProps {
  type: TextInputType;
}

const NoBorderTextInput = (props: NoBorderTextInputProps) => {
  const { type, style, ...restProps } = props;
  const isMultiline = type === TextInputType.TEXT ? true : props.multiline;

  return (
    <TextInput
      style={[
        type === TextInputType.TITLE ? styles.titleType : styles.textType,
        style,
      ]}
      multiline={isMultiline}
      textAlignVertical={isMultiline ? "top" : undefined}
      {...restProps}
    />
  );
};

export default NoBorderTextInput;

const styles = StyleSheet.create({
  titleType: {
    width: "100%",
    paddingHorizontal: 16,
    fontSize: 26,
    fontWeight: "bold",
  },
  textType: {
    width: "100%",
    minHeight: 48,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 18,
    fontWeight: "500",
    flex: 1,
  },
});
