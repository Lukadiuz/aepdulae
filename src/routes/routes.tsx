import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/shared/Layout.tsx";
import ErrorPage from '../components/shared/Errorpage.tsx';

export const  router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorPage />,
    },
  ]);