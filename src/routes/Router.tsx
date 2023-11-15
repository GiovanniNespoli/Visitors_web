import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import PublicRoutes from "./PublicRoutes/PublicRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/">{PublicRoutes}</Route>)
);

const Router: React.FC = () => <RouterProvider router={router} />;

export default Router;
