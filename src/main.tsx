import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";

import App from "./App.tsx";
import ColorModeProvider from "./contexts/ColorModeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </StrictMode>,
);