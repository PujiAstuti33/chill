import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import Beranda from "./pages/beranda";
import DaftarSaya from "./components/Fragments/DaftarSaya";
import DataFetchingComponent from "./components/Fragments/DataFetchingComponent";
import MainComponent from "./components/Responsive/MainComponent";


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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
