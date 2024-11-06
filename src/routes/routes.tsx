import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/shared/Errorpage.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import WorkOrders from "../pages/WorkOrders.tsx";
import App from "../App.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/work-orders",
        element: <WorkOrders />,
      },
    ],
  },
]);
