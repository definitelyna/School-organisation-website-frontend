import { Paper, Select, MenuItem } from "@mui/material";

import Button from "@mui/material/Button";
import UIOverlay from "../../components/UIOverlay";
import { useEffect, useState } from "react";
import DayTimetable from "./components/DayTimetable";
import WeekTimetable from "./components/WeekTimetable";
import style from "./Timetable.module.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import CreatePeriod from "./components/CreatePeriod";
import AddIcon from "@mui/icons-material/Add";

dayjs.extend(customParseFormat);

class Period {
  constructor(name, dayOfWeek, startTime, endTime, note) {
    this.name = name; //string
    this.dayOfWeek = dayOfWeek; //string
    this.startTime = startTime; //dayjs data type
    this.endTime = endTime; //dayjs data type
    this.note = note; //string
  }

  getInfo() {
    return {
      name: this.name,
      dayOfWeek: this.dayOfWeek,
      startTime: this.startTime,
      endTime: this.endTime,
      note: this.note,
    };
  }

  getFormattedTime() {
    return `${this.startTime} - ${this.endTime}`;
  }
}

const testPeriod1 = new Period(
  "Physics",
  "Monday",
  dayjs("13:30", "h:mm").format("h:mm"),
  dayjs("1:30", "H:mm").format("H:mm"),
  "Fucking hate this class"
);
const testPeriod2 = new Period(
  "Maths",
  "Monday",
  dayjs().set("hour", 8).set("minute", 15),
  dayjs().set("hour", 9).set("minute", 10),
  "Fucking hate this class"
);

const testPeriod3 = new Period(
  "Computer Science",
  "Monday",
  dayjs().set("hour", 8).set("minute", 15),
  dayjs().set("hour", 9).set("minute", 10),
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
  const [createPeriodOpen, setCreatePeriodOpen] = useState(false);
  const [newPeriodAdded, setNewPeriodAdded] = useState(false);

  const fetchTimetableData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/periods");
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  fetchTimetableData();

  const handleCreatePeriodOpen = () => {
    setCreatePeriodOpen(true);
  };
  const handleCreatePeriodClose = () => {
    setCreatePeriodOpen(false);
  };

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
        <Button onClick={handleCreatePeriodOpen} color="transparent">
          <AddIcon />
        </Button>
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
      <CreatePeriod open={createPeriodOpen} onClose={handleCreatePeriodClose} />
    </UIOverlay>
  );
}
