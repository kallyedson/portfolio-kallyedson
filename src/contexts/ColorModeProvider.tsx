import {
  useEffect,
  useMemo,
  useState,
} from "react";

import type { ReactNode } from "react";
import type { PaletteMode } from "@mui/material";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import createAppTheme from "../theme";
import { ColorModeContext } from "./ColorModeContext";

interface ColorModeProviderProps {
  children: ReactNode;
}

const getInitialMode = (): PaletteMode => {
  const savedMode = localStorage.getItem("portfolio-theme");

  if (savedMode === "light" || savedMode === "dark") {
    return savedMode;
  }

  return "dark";
};

const ColorModeProvider = ({
  children,
}: ColorModeProviderProps) => {
  const [mode, setMode] = useState<PaletteMode>(getInitialMode);

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const toggleColorMode = () => {
    setMode((currentMode) =>
      currentMode === "dark" ? "light" : "dark",
    );
  };

  useEffect(() => {
    localStorage.setItem("portfolio-theme", mode);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;