import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import App from "./App";
import NoContactSelected from "./NoContactSelected";
import Conversation from "./Conversation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <NoContactSelected />,
      },
      {
        path: "conversation/:id",
        element: <Conversation />,
      },
    ],
  },
]);

export default router;
