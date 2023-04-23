import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return <MantineProvider withNormalizeCSS withGlobalStyles theme={{ colorScheme: "dark" }}>
    <RouterProvider router={router} />
  </MantineProvider>
}

export default App
