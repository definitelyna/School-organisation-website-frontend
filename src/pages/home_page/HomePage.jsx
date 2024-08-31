import { Button } from "@mui/material";
import NavBar from "./components/NavBar"
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});


const HomePage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar />
      <div>ajksndkjasd</div>
    </ThemeProvider>
  );
};

export default HomePage