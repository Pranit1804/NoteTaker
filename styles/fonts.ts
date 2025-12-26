import { TextStyle } from "react-native";

export const FontWeight = {
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
};

export const Fonts = {
  h1: {
    fontSize: 28,
    fontWeight: FontWeight.bold,
    lineHeight: 28 * 1.2,
  } as TextStyle,

  h2: {
    fontSize: 26,
    fontWeight: FontWeight.bold,
    lineHeight: 26 * 1.2,
  } as TextStyle,

  h3: {
    fontSize: 24,
    fontWeight: FontWeight.bold,
    lineHeight: 24 * 1.2,
  } as TextStyle,

  h4: {
    fontSize: 20,
    fontWeight: FontWeight.semiBold,
    lineHeight: 20 * 1.3,
  } as TextStyle,

  h5: {
    fontSize: 18,
    fontWeight: FontWeight.semiBold,
    lineHeight: 18 * 1.3,
  } as TextStyle,

  body: {
    fontSize: 14,
    fontWeight: FontWeight.regular,
    lineHeight: 14 * 1.5,
  } as TextStyle,

  bodyLarge: {
    fontSize: 16,
    fontWeight: FontWeight.regular,
    lineHeight: 16 * 1.5,
  } as TextStyle,

  bodySmall: {
    fontSize: 12,
    fontWeight: FontWeight.regular,
    lineHeight: 12 * 1.4,
  } as TextStyle,

  button: {
    fontSize: 16,
    fontWeight: FontWeight.semiBold,
  } as TextStyle,

  caption: {
    fontSize: 12,
    fontWeight: FontWeight.regular,
    lineHeight: 12 * 1.3,
  } as TextStyle,

  label: {
    fontSize: 14,
    fontWeight: FontWeight.medium,
  } as TextStyle,
};
