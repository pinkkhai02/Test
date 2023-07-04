import { createTheme } from "@mui/material/styles";

const themeConfigs = createTheme({
  palette: {
    primary: {
      main: "#000",
      contrastText: "rgb(102 105 102 / 90%)",
      highlightText: "rgb(94, 53, 177)",
      background: "rgb(237, 231, 246)",
      text: "#000",
      backgroundMain: "#fff",
    },
    secondary: {
      main: "#428bca",
      contrastText: "#fff",
      background: "rgb(238, 242, 246)",
    },
  },
});

export default themeConfigs;
