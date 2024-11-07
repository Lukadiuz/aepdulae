import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/shared/Errorpage.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import WorkOrders from "../pages/WorkOrders.tsx";
import App from "../App.tsx";
import Booking from "../pages/Booking.tsx";
import Bringers from "../pages/Bringers.tsx";
import Users from "../pages/Users.tsx";
import News from "../pages/news/News.tsx";
import Promotion from "../pages/Promotion.tsx";

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
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/bringers",
        element: <Bringers />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/promotion",
        element: <Promotion />,
      },
    ],
  },
]);
