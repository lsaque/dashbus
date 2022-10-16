import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GlobalContextProvider } from "./common";
import { router } from "./routes";
import { MuiThemeWrapper } from "./themes";

const fallBack = () => {
  return (
    <Backdrop open>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MuiThemeWrapper>
      <GlobalContextProvider>
        <RouterProvider router={router} fallbackElement={fallBack()} />
      </GlobalContextProvider>
    </MuiThemeWrapper>
  </React.StrictMode>
);
