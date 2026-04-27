import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import App from "./App.tsx";
import theme from "./components/theme.ts";
import { TaskProvider } from "./context/TaskProvider.tsx";
import { SnackbarProvider } from "./context/SnackbarProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </StrictMode>,
);
