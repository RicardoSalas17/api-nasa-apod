import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PhotoOFTheDay from "./Views/PhotoOFTheDay.jsx";
import PhotoByDay from "./Views/PhotoByDay.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PhotoOFTheDay />,
  },
  {
    path: "/photo/:date",
    element: <PhotoByDay />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
