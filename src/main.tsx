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
import ProductPage from "./pages/product/index.tsx";
import Home from "./pages/home/index.tsx";
import ProductDetails from "./pages/productDetails/index.tsx";
import Main from "./pages/checkout/index.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/" element={<Root />}>
        <Route path="/home" element={<Home />} />
        <Route path="/headphones" element={<ProductPage />} />
        <Route path="/headphones/:name" element={<ProductDetails />} />
        <Route path="/speakers" element={<ProductPage />} />
        <Route path="/speakers/:name" element={<ProductDetails />} />
        <Route path="/earphones" element={<ProductPage />} />
        <Route path="/earphones/:name" element={<ProductDetails />} />
        <Route path="/checkout/:url" element={<Main />} />
      </Route>
    </>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
