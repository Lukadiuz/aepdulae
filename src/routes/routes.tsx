import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/shared/Errorpage.tsx";
import Dashboard from "../pages/dashboard/Dashboard.tsx";
import WorkOrders from "../pages/workOrders/WorkOrders.tsx";
import App from "../App.tsx";

import Bringers from "../pages/bringers/Bringers.tsx";
import Users from "../pages/users/Users.tsx";
import News from "../pages/news/News.tsx";
import Promotion from "../pages/promotion/Promotion.tsx";
import Login from "../pages/login/login.tsx";
import Booking from "../pages/booking/Booking.tsx";
import WorkOrdersCreate from "../pages/workOrders/WorkOrdersCreate.tsx";
import WorkOrdersDetail from "../pages/workOrders/WorkOrdersDetail.tsx";
import BookingDetail from "../pages/booking/BookingDetail.tsx";
import BringersDetail from "../pages/bringers/BringersDetail.tsx";
import UsersDetail from "../pages/users/UsersDetail.tsx";

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
        path: "/work-orders/create",
        element: <WorkOrdersCreate />,
      },
      {
        path: "/work-orders/detail/:id",
        element: <WorkOrdersDetail />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/booking/detail/:id",
        element: <BookingDetail />,
      },
      {
        path: "/bringers",
        element: <Bringers />,
      },
      {
        path: "/bringers/detail/:id",
        element: <BringersDetail />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/detail/:id",
        element: <UsersDetail />,
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
  {
    path: "/login",
    element: <Login />,
  },
]);
