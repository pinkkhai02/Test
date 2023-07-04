import Router from "./routes/routes";
import themeConfigs from "./configs/color.config";
import { ThemeProvider } from "@mui/material/styles";

const App = () => {
  return (
    <ThemeProvider theme={themeConfigs}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
