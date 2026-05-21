import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../app/App";
import { Dashboard } from "../features/dashboard/pages/Dashboard";
import { Profile } from "../features/profile/pages/Profile";
import { Activities } from "../features/activities/pages/Activities";
import { Track } from "../features/track/pages/Track";
import { Settings } from "../features/settings/pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "profile", element: <Profile /> },
      { path: "activities", element: <Activities /> },
      { path: "events", element: <div>Events</div> },
      { path: "track", element: <Track /> },
      { path: "settings", element: <Settings /> },
      { path: "login", element: <div>Login</div> },
      { path: "register", element: <div>Register</div> },
    ],
  },
]);
