import { AppBar, Toolbar } from "@mui/material";
import { sidebarWidth } from "./Sidebar";

const headerWidth = `100vw - ${sidebarWidth}`

export default function Header() {
    return (
      <AppBar sx={{width: `calc(${headerWidth})`}}>
        <Toolbar></Toolbar>
      </AppBar>
    );
}