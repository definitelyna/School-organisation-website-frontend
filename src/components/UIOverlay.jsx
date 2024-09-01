import Header from "./Header";
import Sidebar from "./Sidebar";
import { Box, ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function UIOverlay(prop) {
  return (
    <Box sx={{display: "flex"}}>
      <ThemeProvider theme={darkTheme}>
        <Sidebar />
        <Header />
        <Box component="main" sx={{ flexGrow: 1, height: "100vh" }}>
          {prop.children}
        </Box>
      </ThemeProvider>
    </Box>
  );
}
