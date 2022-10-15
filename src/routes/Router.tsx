import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route
} from "react-router-dom";
import { LayoutComponent } from "../layout";

export const ROUTES = {
  BASE_ROOT: "/",
  UNKNOWN: "*"
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTES.BASE_ROOT}
      element={<LayoutComponent />}
      errorElement={<span>Something went wrong (Error boundary)</span>}
    >
      <Route index element={<span>dashboard</span>} />
      <Route path="about" element={<span>about</span>} />
      <Route
        path={ROUTES.UNKNOWN}
        element={<Navigate to={ROUTES.BASE_ROOT} replace />}
      />
    </Route>
  )
);
