import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../app/App";
import { Dashboard } from "../features/dashboard/pages/Dashboard";
import { Profile } from "../features/profile/pages/Profile";
import { Activities } from "../features/activities/pages/Activities";
import { Track } from "../features/track/pages/Track";
import { Settings } from "../features/settings/pages/Settings";
import { Events } from "../features/events/pages/Events";
import { EventNew } from "../features/events/pages/EventNew";
import { EventDetail } from "../features/events/pages/EventDetail";
import { Login } from "../features/auth/pages/Login";
import { Register } from "../features/auth/pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "profile", element: <Profile /> },
      { path: "activities", element: <Activities /> },
      { path: "events", element: <Events /> },
      { path: "events/new", element: <EventNew /> },
      { path: "events/:id", element: <EventDetail /> },
      { path: "track", element: <Track /> },
      { path: "settings", element: <Settings /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);
