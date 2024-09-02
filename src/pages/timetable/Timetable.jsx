import { Paper, Select, MenuItem } from "@mui/material";
import UIOverlay from "../../components/UIOverlay";
import { useState } from "react";
import DayTimetable from "./components/DayTimetable";
import WeekTimetable from "./components/WeekTimetable";
import style from "./Timetable.module.css";

function Period(name, day, time, note) {
  this.name = name;
  this.day = day;
  this.time = time;
  this.note = note;
}

const testPeriod1 = new Period(
  "Physics",
  "Monday",
  "12:15pm - 1:00pm",
  "Fucking hate this class"
);
const testPeriod2 = new Period(
  "Maths",
  "Monday",
  "1:00pm - 2:00pm",
  "Fucking hate this class"
);

const testPeriod3 = new Period(
  "Computer Science",
  "Monday",
  "8:00-10:00",
  "Fucking hate this class"
);

export default function Timetable() {
  const [timetable, setTimetable] = useState({
    Monday: [testPeriod1, testPeriod3],
    Tuesday: [testPeriod2],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });
  const [currentDaySelected, setCurrentDaySelected] = useState("Monday");
  const [view, setView] = useState("Day");

  const handleDayChange = (e) => {
    setCurrentDaySelected(e.target.value);
  };

  const handleViewChange = (e) => {
    setView(e.target.value);
  };

  return (
    <UIOverlay pageName="Timetable">
      <div className={style.dropDownWrap}>
        <Select
          id="dayOfWeekSelect"
          value={currentDaySelected}
          label="Day"
          onChange={(e) => handleDayChange(e)}
        >
          <MenuItem value={"Monday"}>Monday</MenuItem>
          <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
          <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
          <MenuItem value={"Thursday"}>Thursday</MenuItem>
          <MenuItem value={"Friday"}>Friday</MenuItem>
          <MenuItem value={"Saturday"}>Saturday</MenuItem>
          <MenuItem value={"Sunday"}>Sunday</MenuItem>
        </Select>

        <Select
          id="view"
          value={view}
          label="Day"
          onChange={(e) => handleViewChange(e)}
        >
          <MenuItem value={"Day"}>Day</MenuItem>
          <MenuItem value={"Week"}>Week</MenuItem>
        </Select>
      </div>

      <Paper sx={{ width: "400px", marginInline: "auto" }} elevation={6}>
        {view == "Day" && (
          <DayTimetable timetable={timetable} currentDay={currentDaySelected} />
        )}
        {view == "Week" && (
          <WeekTimetable
            timetable={timetable}
            currentDay={currentDaySelected}
          />
        )}

      </Paper>
    </UIOverlay>
  );
}
