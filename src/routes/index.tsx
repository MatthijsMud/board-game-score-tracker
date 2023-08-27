import { Route, createHashRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import { Container, Stack } from "@mantine/core";
import { NotFound } from "./404";

export const router = createHashRouter(createRoutesFromElements(
  <Route element={<Container size="lg" children={<Stack><Outlet /></Stack>} />}>
    <Route index lazy={() => import("./General")} />

    <Route path="*" element={<NotFound />} />
  </Route>
));