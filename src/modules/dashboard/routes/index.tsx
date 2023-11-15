import { Route } from "react-router-dom";
import DashBoard from "../screens";

const DashboardRoutes = (
  <Route>
    <Route path="/" element={<DashBoard />} />
  </Route>
);

export default DashboardRoutes;
