import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "theme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });
  

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
      <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
