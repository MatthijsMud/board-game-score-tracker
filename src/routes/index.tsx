import { Route, createHashRouter, createRoutesFromElements } from "react-router-dom";

export const router = createHashRouter(createRoutesFromElements(
  <Route>
    <Route index />
  </Route>
));