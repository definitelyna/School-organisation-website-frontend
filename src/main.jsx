import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home_page/HomePage.jsx";
import Timetable from "./pages/timetable/Timetable.jsx";
import Events from "./pages/events/Events.jsx";
import Tasks from "./pages/tasks/Tasks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/homepage",
    element: <HomePage />,
  },

  {
    path: "/timetable",
    element: <Timetable />,
  },

  {
    path: "/events",
    element: <Events />,
  },

  {
    path: "/tasks",
    element: <Tasks />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
