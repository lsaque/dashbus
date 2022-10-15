import React from "react";
import { Outlet } from "react-router-dom";

export const LayoutComponent: React.FC = () => {
  return (
    <div>
      <h1>GLOBAL_LAYOUT</h1>
      <Outlet />
    </div>
  );
};
