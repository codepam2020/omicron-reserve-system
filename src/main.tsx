import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./screens/home_page";
import FreeReservePage from "./screens/free_reserve_page";
import StatePage from "./screens/state_page";
import RegularReservePage from "./screens/regular_reserve_page";
import RemoveRegularReservePage from "./screens/remove_regular_reserve_page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/free-reserve",
    element: <FreeReservePage />
  },
  {
    path: "/state",
    element: <StatePage />
  },
  {
    path: '/regular-reserve',
    element: <RegularReservePage />
  },
  {
    path: '/remove-reg-reserve',
    element: <RemoveRegularReservePage />
  }
]);

export default function Main () {
  return (
    <RouterProvider router={router} />
  );
}