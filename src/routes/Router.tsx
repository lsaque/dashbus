import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route
} from "react-router-dom";
import { LayoutComponent } from "../layout";
import {
  GeneralPage,
  NewPage,
  CustomPage,
  ProconvePage,
  HolidayPage
} from "../pages";

export const ROUTES = {
  BASE_ROOT: "/",
  UNKNOWN: "*",

  GENERAL: "general",
  PROCONVE: "proconve",
  HOLIDAY: "holiday",

  CUSTOM: "custom",
  NEW: "new",

  ID: ":id"
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={ROUTES.BASE_ROOT}
      element={<LayoutComponent />}
      errorElement={<span>Something went wrong (Error boundary)</span>}
    >
      <Route index element={<Navigate to={ROUTES.GENERAL} />} />

      <Route path={ROUTES.GENERAL} element={<GeneralPage />} />
      <Route path={ROUTES.PROCONVE} element={<ProconvePage />} />
      <Route path={ROUTES.HOLIDAY} element={<HolidayPage />} />

      <Route path={ROUTES.CUSTOM} element={<CustomPage />}>
        <Route path={ROUTES.ID} element={<span>custom</span>} />
      </Route>

      <Route path={ROUTES.NEW} element={<NewPage />} />

      <Route
        path={ROUTES.UNKNOWN}
        element={<Navigate to={ROUTES.BASE_ROOT} replace />}
      />
    </Route>
  )
);
