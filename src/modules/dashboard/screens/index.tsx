import { Link } from "react-router-dom";

const DashBoard: React.FC = () => {
  return (
    <div>
      <h1>Ola</h1>
      <Link to={"/visitorlist"}>navegar</Link>
    </div>
  );
};

export default DashBoard;
