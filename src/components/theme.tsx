import * as React from "react";
import { Theme, createTheme } from "@material-ui/core/styles";
import "@fontsource/roboto";

const theme: Theme = createTheme({
  typography: {
    fontFamily: "roboto",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 900,
    // section headings
    h3: {
      fontSize: 45,
      fontWeight: 900,
      lineHeight: 1.36,
    },
    // paragraph
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
    // button
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
