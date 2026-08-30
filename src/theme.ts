import {
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

import type { PaletteMode } from "@mui/material";

const headingFont = '"Space Grotesk", sans-serif';
const bodyFont = '"Inter", sans-serif';

const createAppTheme = (mode: PaletteMode) => {
  const isDark = mode === "dark";

  let theme = createTheme({
    palette: {
      mode,

      primary: {
        main: isDark ? "#0f172a" : "#e2e8f0",
        contrastText: isDark ? "#f8fafc" : "#0f172a",
      },

      secondary: {
        main: isDark ? "#38bdf8" : "#0284c7",
      },

      background: {
        default: isDark ? "#000000" : "#f8fafc",
        paper: isDark ? "#0f172a" : "#ffffff",
      },

      text: {
        primary: isDark ? "#f8fafc" : "#0f172a",
        secondary: isDark ? "#cbd5e1" : "#475569",
      },
    },

    typography: {
      fontFamily: bodyFont,

      h1: {
        fontFamily: headingFont,
        fontWeight: 600,
        letterSpacing: "-0.03em",
      },

      h2: {
        fontFamily: headingFont,
        fontWeight: 600,
        letterSpacing: "-0.03em",
      },

      h3: {
        fontFamily: headingFont,
        fontWeight: 600,
        letterSpacing: "-0.02em",
      },

      h4: {
        fontFamily: headingFont,
        fontWeight: 600,
        letterSpacing: "-0.02em",
      },

      h5: {
        fontFamily: headingFont,
        fontWeight: 600,
      },

      h6: {
        fontFamily: headingFont,
        fontWeight: 600,
      },

      button: {
        fontFamily: headingFont,
        fontWeight: 600,
        textTransform: "none",
        letterSpacing: "0.03em",
      },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            scrollBehavior: "smooth",
            width: "100%",
            maxWidth: "100%",
            overflowX: "hidden",
          },

          body: {
            margin: 0,
            width: "100%",
            maxWidth: "100%",
            overflowX: "hidden",
            backgroundColor: isDark ? "#000000" : "#f8fafc",
          },

          "#root": {
            width: "100%",
            maxWidth: "100%",
            overflowX: "hidden",
          },

          "::selection": {
            color: isDark ? "#020617" : "#ffffff",
            backgroundColor: isDark ? "#38bdf8" : "#0284c7",
          },
        },
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return theme;
};

export default createAppTheme;