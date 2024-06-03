import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home/Home";
import SignIn from "@/pages/auth/sign-in/SignIn";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth/user/sign-in",
    element: <SignIn />,
  },
]);
