import { Theme, createTheme } from "@material-ui/core/styles";
import "@fontsource/roboto";

// create a standard theme to manage stylings of project

const theme: Theme = createTheme({
  typography: {
    fontFamily: "roboto",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 900,
    h3: {
      fontSize: 42,
      fontWeight: 900,
      lineHeight: 1.36,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: 1.25,
      letterSpacing: 0,
    },
    body2: {
        fontSize: 20,
        fontWeight: 400,
        fontStyle: "normal",
        lineHeight: 1.25,
        letterSpacing: 0,
    },
    caption: {
        fontSize: 16,
        fontWeight: 400,
        fontStyle: "normal",
        lineHeight: 1.25,
        letterSpacing: 0,
        color: "#888888",
    },
    button: {
      fontSize: 16,
      fontWeight: 600,
      fontStyle: "normal",
      letterSpacing: 0,
      textTransform: "inherit",
    },
  },
  palette: {
    primary: {
      main: "#FFA713",
      contrastText: "#3A3A3A",
    },
    text: {
      primary: "#3A3A3A",
    },
  },
  shape: {
    borderRadius: 4,
  },
});
export default theme;
