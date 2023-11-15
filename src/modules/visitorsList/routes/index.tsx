import { Route } from "react-router-dom";
import VisitorList from "../screens";

const VisitorsListRoutes = (
  <Route>
    <Route path="/visitorlist" element={<VisitorList />} />
  </Route>
);

export default VisitorsListRoutes;
