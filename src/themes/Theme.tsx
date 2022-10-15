import { Fragment, PropsWithChildren } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc"
    },
    secondary: {
      main: "#edf2ff"
    }
  }
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main
    }
  }
});

export const ThemeWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Fragment>
  );
};
