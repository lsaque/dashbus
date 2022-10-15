import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { MuiThemeWrapper } from "./themes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MuiThemeWrapper>
      <RouterProvider router={router} />
    </MuiThemeWrapper>
  </React.StrictMode>
);
