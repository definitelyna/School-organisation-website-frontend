import { ThemeProvider, createTheme } from "@mui/material/styles";
import style from "./Dashboard.module.css";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import UIOverlay from "../../components/UIOverlay";

export default function Dashboard() {
  return (
    <UIOverlay pageName="Dashboard">
      <Grid container spacing={2}>
        <Grid size={4}>
          <Paper>Today's classes</Paper>
        </Grid>

        <Grid size={4}>
          <Paper>Upcoming tasks</Paper>
        </Grid>

        <Grid size={4}>
          <Paper>Paper 1</Paper>
        </Grid>

        <Grid size={4}>
          <Paper>Paper 1</Paper>
        </Grid>
      </Grid>
    </UIOverlay>
  );
}
