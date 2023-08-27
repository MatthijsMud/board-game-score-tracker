import { Route, createHashRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import { Shell } from "../components/Shell";
import { NotFound } from "./404";

export const router = createHashRouter(createRoutesFromElements(
  <Route element={<Shell children={<Outlet />} />}>
    <Route index lazy={() => import("./General")} />
    <Route path="players">
      <Route index lazy={() => import("./players/AllPlayers")} />
      <Route path="new" lazy={() => import("./players/[Player]/Create")} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Route>
));