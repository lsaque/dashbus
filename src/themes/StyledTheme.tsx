import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeOptions } from "@mui/material";

import { MuiTheme } from ".";

type ThemeInterface = typeof MuiTheme & ThemeOptions;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}

export const StyledThemeWrapper: React.FC<PropsWithChildren> = ({
  children
}) => <ThemeProvider theme={MuiTheme}>{children}</ThemeProvider>;
