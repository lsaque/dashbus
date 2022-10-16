import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route
} from "react-router-dom";
import { LayoutComponent } from "../layout";
import { GeneralPage } from "../pages";

export const ROUTES = {
  BASE_ROOT: "/",
  UNKNOWN: "*",

  GENERAL: "general",
  PAGE1: "page1",
  PAGE2: "page2",
  PAGE3: "page3",
  PAGE4: "page4",
  PAGE5: "page5"
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTES.BASE_ROOT}
      element={<LayoutComponent />}
      errorElement={<span>Something went wrong (Error boundary)</span>}
    >
      <Route index element={<Navigate to={ROUTES.GENERAL} replace />} />
      <Route path={ROUTES.GENERAL} element={<GeneralPage />} />
      <Route path={ROUTES.PAGE1} element={<span>Page 1</span>} />
      <Route path={ROUTES.PAGE2} element={<span>Page 2</span>} />
      <Route path={ROUTES.PAGE3} element={<span>Page 3</span>} />
      <Route path={ROUTES.PAGE4} element={<span>Page 4</span>} />
      <Route path={ROUTES.PAGE5} element={<span>Page 5</span>} />
      <Route
        path={ROUTES.UNKNOWN}
        element={<Navigate to={ROUTES.BASE_ROOT} replace />}
      />
    </Route>
  )
);
