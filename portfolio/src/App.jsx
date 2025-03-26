import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Modern from "./pages/Modern";
import Terminal from "./pages/Terminal";

const router = createBrowserRouter([
  { path: "/", element: <Modern /> },
  { path: "/terminal", element: <Terminal /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
