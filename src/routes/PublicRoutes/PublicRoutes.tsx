import { Route } from "react-router-dom";
import DashboardRoutes from "../../modules/dashboard/routes";
import VisitorsListRoutes from "../../modules/visitorsList/routes";

const PublicRoutes = (
  <Route>
    {DashboardRoutes}
    {VisitorsListRoutes}
  </Route>
);

export default PublicRoutes;
