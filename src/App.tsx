import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./theme/darkTheme";
import { AppRouter } from "./routes";

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
