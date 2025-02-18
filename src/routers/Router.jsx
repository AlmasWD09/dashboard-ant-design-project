import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";
import CommonLayout from "../pages/dashboard/common/CommonLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    // dashboard 
    {
        path:"/dashboard",
        element:<DashboardLayout />,
        children:[
            {
                path:"/dashboard",
                element:<CommonLayout />
            },
        ]
    }
  ]);

  export default router;