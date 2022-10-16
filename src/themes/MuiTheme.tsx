import { PropsWithChildren } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  ThemeOptions
} from "@mui/material";

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
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        sx: {
          boxShadow: "0 10px 20px #C4C8D040",
          borderRadius: "20px"
        }
      }
      // defaultProps: {
      // elevation: 0,
      // sx: {
      // boxShadow: "0 10px 20px #C4C8D040",
      // borderRadius: "20px",
      // border: "1px solid red"
      // }
      // }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1100,
      lg: 1472,
      xl: 1728
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
