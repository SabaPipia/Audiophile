import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Root from "./pages/Root/index.tsx";
import Headphones from "./pages/headphones/index.tsx";
import Home from "./pages/home/index.tsx";
import Speakers from "./pages/speakers/index.tsx";
import EarPhones from "./pages/earphones/index.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/" element={<Root />}>
        <Route path="/home" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<EarPhones />} />
      </Route>
    </>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
