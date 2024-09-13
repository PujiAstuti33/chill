// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store"; // Pastikan path import sudah benar
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Beranda from "./pages/beranda";
import DaftarSaya from "./components/Fragments/DaftarSaya";

// Konfigurasi router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/beranda",
    element: <Beranda />,
  },
  {
    path: "/daftarsaya",
    element: <DaftarSaya />,
  },
]);

// Render aplikasi
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Bungkus RouterProvider dengan Provider */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
