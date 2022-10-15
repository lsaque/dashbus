import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
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
      <RouterProvider router={router} fallbackElement={fallBack()} />
    </MuiThemeWrapper>
  </React.StrictMode>
);
