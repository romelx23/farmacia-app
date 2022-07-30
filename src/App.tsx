import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { HomePage } from "./pages";
import { AppRouter, DashboardRoutes } from "./routes";
import { darkTheme } from "./theme/darkTheme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
