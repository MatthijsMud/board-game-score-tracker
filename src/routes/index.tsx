import { Route, createHashRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import { Shell } from "../components/Shell";
import { NotFound } from "./404";

export const router = createHashRouter(createRoutesFromElements(
  <Route element={<Shell children={<Outlet />} />} errorElement={<NotFound />}>
    <Route index lazy={() => import("./General")} />
    <Route path="players">
      <Route index lazy={() => import("./players/AllPlayers")} />
      <Route path="new" lazy={() => import("./players/[Player]/Create")} />
      <Route path=":playerId" lazy={() => import("./players/[Player]/General")} />
      <Route path=":playerId/edit" lazy={() => import("./players/[Player]/Update")} />
    </Route>
    <Route path="locations">
      <Route index lazy={() => import("./locations/AllLocations")} />
      <Route path="new" lazy={() => import("./locations/[Location]/Create")} />
      <Route path=":locationId" lazy={() => import("./locations/[Location]/General")} />
    </Route>
  </Route>
));