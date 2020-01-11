import { mergeTheme, theme} from '../utils'

const newTheme = {
  COLORS: {
    // base colors
    accent: "#F3534A",
    primary: "#0AC4BA",
    secondary: "#2BDA8E",
    tertiary: "#FFE358",
    black: "#323643",
    white: "#FFFFFF",
    gray: "#9DA3B4",
    gray2: "#C5CCD6",
  },
  SIZES: {
    // global sizes
    base: 8,
    font: 16,
    radius: 30,
    padding: 26,

    // font sizes
    h1: 34,
    h2: 24,
    h3: 20,
    title: 16,
    subtitle: 13,
    caption: 12,
    small: 10
  }
};

export default mergeTheme(theme, newTheme)