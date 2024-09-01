import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/home_page/Dashboard.jsx";
import Timetable from "./pages/timetable/Timetable.jsx";
import Events from "./pages/events/Events.jsx";
import Tasks from "./pages/tasks/Tasks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
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
