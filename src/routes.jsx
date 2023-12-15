import Home from "./pages/Home/Home";
import ProtectedRoutes from "./hoc/ProtectedRoutes";
import Login from "./pages/Login/Login";

export const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Home />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/login",
    element: <Login  />,
  },
];
