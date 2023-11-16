import {
  Container,
  Content,
  IconDashBoard,
  IconList,
  Menu,
  MenuItem,
  Sidebar,
} from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Sidebar>
        <Menu to="/" replace={true}>
          <IconDashBoard size={15} />
          <MenuItem>Dashboards</MenuItem>
        </Menu>
        <Menu to="/visitorList">
          <IconList size={15} />
          <MenuItem>Lista</MenuItem>
        </Menu>
      </Sidebar>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
