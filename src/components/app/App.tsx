import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";

import Home from "../home/Home";

const _theme = createMuiTheme({
  // palette: {
  // primary: {
  //   main: teal['A200']
  // },
  // secondary: {
  //   main: blueGrey[300]
  // },
  // warning: {
  //   main: deepOrange[700]
  // },
  // background: {
  //   default: grey[50]
  // }
  // }
});
const responsiveTheme = responsiveFontSizes(_theme);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <BrowserRouter>
        <main>
          <Route path="/" exact component={Home} />
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
