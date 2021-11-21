import * as React from "react";
import {
  ThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Paper } from "@material-ui/core";
import Module from "./pages";
import theme from "./components/theme";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <StylesProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Paper elevation={0}>
            <Module />
          </Paper>
        </ThemeProvider>
      </StylesProvider>
    </SnackbarProvider>
  );
}

export default App;
