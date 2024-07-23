import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    secondary: "#fff",
    primary: "#0366d6",
    error: "#d73a4a",
  },
  backgroundColors: {
    primary: "#25292c",
    secondary: "rgba(0, 0, 0, 0.5)",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      ios: "Sans-serif",
      android: "Roboto",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
