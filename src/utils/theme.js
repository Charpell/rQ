import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#173CBC",
  secondary: "#47E7C1",
  tertiary: "#334355",
  background: "#F2F5F8",
  inactiveTab: '#D1DCFF',

  // non-colors
  black: "#000020",
  white: "#FFFFFF",

  // color variations
  gray: "#535453",
  error: "#CC0000",
  warning: "#FFE358",
  success: "#4CD964",
  info: "#4DA1FF",
  gray2: "#7892E6",
  muted: "#C1C6CB"
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 16,
  radius: 4,
  padding: 24,
  btnRadius: 11,

  // font sizes
  h1: 26,
  h2: 24,
  h3: 20,
  title: 18,
  subtitle: 16,
  body: 14,
  caption: 12,
  small: 10,
  tiny: 9,

  // app dimensions
  width,
  height
};

export const FONTS = {
  h1: { fontSize: SIZES.h1, letterSpacing: 0.15 },
  h2: { fontSize: SIZES.h2, letterSpacing: 0 },
  h3: { fontSize: SIZES.h3, letterSpacing: 0.15 },
  h4: { fontSize: SIZES.h4 },
  title: { fontSize: SIZES.title, letterSpacing: 0.15 },
  subtitle: { fontSize: SIZES.subtitle },
  body: { fontSize: SIZES.body },
  caption: { fontSize: SIZES.caption, letterSpacing: 0.4 },
  small: { fontSize: SIZES.small, letterSpacing: 1.5 },
  tiny: { fontSize: SIZES.tiny, letterSpacing: 0 }
};

export const WEIGHTS = {
  regular: "normal",
  bold: "bold",
  semibold: "500",
  medium: "400",
  light: "300"
};

export default { COLORS, SIZES, FONTS, WEIGHTS };