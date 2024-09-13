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
import DataFetchingComponent from "./components/Fragments/DataFetchingComponent";
import MainComponent from "./components/Responsive/MainComponent";

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
<<<<<<< HEAD
]);

// Render aplikasi
ReactDOM.createRoot(document.getElementById('root')).render(
=======
  {
    path: "/data-fetching",
    element: <DataFetchingComponent />,
  },
  {
    path: '/responsive',
    element: <MainComponent />, 
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
>>>>>>> 20244a1dacb33caa3aa833bf1aac171dd98d3f69
  <React.StrictMode>
    <Provider store={store}> {/* Bungkus RouterProvider dengan Provider */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
