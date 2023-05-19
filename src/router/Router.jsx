import React from "react"
import { createBrowserRouter } from "react-router-dom"
import Home from "../views/Home"
import Signin from "../views/Signin"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
])
