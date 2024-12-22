import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
