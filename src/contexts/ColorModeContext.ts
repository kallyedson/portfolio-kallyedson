import { createContext, useContext } from "react";
import type { PaletteMode } from "@mui/material";

export interface ColorModeContextData {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<
  ColorModeContextData | undefined
>(undefined);

export const useColorMode = () => {
  const context = useContext(ColorModeContext);

  if (!context) {
    throw new Error(
      "useColorMode deve ser utilizado dentro do ColorModeProvider",
    );
  }

  return context;
};