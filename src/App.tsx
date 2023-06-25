import { useState } from "react";
import { MantineProvider, ColorSchemeProvider, type ColorScheme } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value ?? colorScheme === "dark" ? "light" : "dark");
  }
  return <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider withNormalizeCSS withGlobalStyles theme={{ colorScheme }}>
      <RouterProvider router={router} />
    </MantineProvider>
  </ColorSchemeProvider>
}

export default App
