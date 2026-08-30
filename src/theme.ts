import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const headingFont = '"Space Grotesk", sans-serif';
const bodyFont = '"Inter", sans-serif';

let theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#0f172a",
      contrastText: "#f8fafc",
    },

    secondary: {
      main: "#38bdf8",
    },

    background: {
      default: "#000000",
      paper: "#0f172a",
    },

    text: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
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
            backgroundColor: "#000000",
            overflowX: "hidden",
        },

        "#root": {
            width: "100%",
            maxWidth: "100%",
            overflowX: "hidden",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;