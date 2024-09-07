import Grid from "@mui/material/Grid2";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function DayTimetable(prop) {
    const timetable = prop.timetable
    const currentDay = prop.currentDay

  return (
    <Grid container columns={1} spacing={2}>
      {timetable[currentDay].map((period, index) => (
        <Grid key={index} size={1}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography>{period.name}</Typography>
            <Typography>{period.getFormattedTime()}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
