import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Root from "./pages/Root/index.tsx";
import ProductPage from "./pages/product/index.tsx";
import Home from "./pages/home/index.tsx";
import ProductDetails from "./pages/productDetails/index.tsx";
import Main from "./pages/checkout/index.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="/checkout/:url" element={<Main />} />
      <Route path="/:category/:name" element={<ProductDetails />} />
      <Route path="/:category" element={<ProductPage />} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
