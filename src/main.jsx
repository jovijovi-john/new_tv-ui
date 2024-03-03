import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import EPG from "./pages/EPG/EPG.jsx";
import EPGInfoDTV from "./pages/EPG-InfoDTV/EPG-InfoDTV.jsx";
import InitialApp from "./pages/InitialApp/InitialApp.jsx";
import GuiaPorEmissora from "./pages/GuiaPorEmissora/index.jsx";
import GuiaPorGenero from "./pages/GuiaPorGenero/index.jsx";
import GuiaRadiodifusor from "./pages/GuiaRadiodifusor/index.jsx";
import GuiaCategoria from "./pages/GuiaCategoria/index.jsx";
import Homepage from "./pages/Homepage/index.jsx";
import Fabricante from "./pages/Fabricante/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/fabricante",
    element: <Fabricante />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/EPG",
    element: <EPG />,
  },
  {
    path: "/EPG-InfoDTV",
    element: <EPGInfoDTV />,
  },
  {
    path: "/GuiaTvAberta",
    element: <GuiaPorEmissora />,
  },
  {
    path: "/GuiaPorGenero",
    element: <GuiaPorGenero />,
  },
  {
    path: "/GuiaCategoria",
    element: <GuiaCategoria />,
  },
  {
    path: "/GuiaRadiodifusor",
    element: <GuiaRadiodifusor />,
  },
  {
    path: "/InitialApp",
    element: <InitialApp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
