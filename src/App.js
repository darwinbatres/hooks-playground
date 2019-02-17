import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Counter from "./Counter/Counter";
import Totals from "./Totals/Totals";

const theme = createMuiTheme({
  // palette: {
  //   primary: purple,
  //   secondary: green
  // },
  typography: {
    useNextVariants: true
  }
  // status: {
  //   danger: "orange"
  // }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <p>Hello from App Component!</p>
    <Counter />
    <Totals />
  </MuiThemeProvider>
);

export default App;
