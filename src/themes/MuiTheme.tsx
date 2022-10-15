import { PropsWithChildren } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

import { StyledThemeWrapper } from "./StyledTheme";

export const MuiTheme = {
  palette: {
    common: {
      black: "#000000",
      white: "#FFFFFF"
    },
    primary: {
      main: "#508FF4",
      light: "#EAF2FF"
    },
    background: {
      default: "#EAF2FF",
      paper: "#FFFFFF"
    }
  }
};

export const MuiThemeWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = createTheme(MuiTheme);

  return (
    <ThemeProvider theme={theme}>
      <StyledThemeWrapper>
        <CssBaseline />
        {children}
      </StyledThemeWrapper>
    </ThemeProvider>
  );
};
