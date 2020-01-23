import { mergeTheme, theme} from '../utils'

const newTheme = {
  COLORS: {
    // base colors
    accent: "#F3534A",
    primary: "#173CBC",
    secondary: "#47E7C1",
    tertiary: "#FFE358",
    black: "#323643",
    white: "#FFFFFF",
    gray: "#9DA3B4",
    gray2: "#C5CCD6",
    background: '#ffffff',
    altBackground: "#F2F5F8",
    inactiveTab: '#D1DCFF',
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