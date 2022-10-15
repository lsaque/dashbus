import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route
} from "react-router-dom";
import { LayoutComponent } from "../layout";

export const ROUTES = {
  BASE_ROOT: "/",
  UNKNOWN: "*",

  GENERAL: "general"
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTES.BASE_ROOT}
      element={<LayoutComponent />}
      errorElement={<span>Something went wrong (Error boundary)</span>}
    >
      <Route index element={<Navigate to={ROUTES.GENERAL} replace />} />
      <Route path={ROUTES.GENERAL} element={<span>dashboard</span>} />
      <Route path="test1" element={<span>teste1</span>} />
      <Route path="test2" element={<span>teste2</span>} />
      <Route path="test3" element={<span>teste3</span>} />
      <Route path="test4" element={<span>teste4</span>} />
      <Route
        path={ROUTES.UNKNOWN}
        element={<Navigate to={ROUTES.BASE_ROOT} replace />}
      />
    </Route>
  )
);
