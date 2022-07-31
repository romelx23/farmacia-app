import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import { HomePage } from "./pages";
import { DashboardRoutes } from "./routes";
import { darkTheme } from "./theme/darkTheme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <DashboardRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
