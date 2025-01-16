import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Layout from "../Main_Layout/Layout/Layout";
import Home from "../Pages/HomePage/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            index: true,
            element: <Home></Home>
        },
        
      ]
    },
  ]);