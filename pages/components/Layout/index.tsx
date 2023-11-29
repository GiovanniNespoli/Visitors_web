import {
  Container,
  Content,
  IconDashBoard,
  IconList,
  Menu,
  MenuItem,
  Sidebar,
} from "./styles";

export default function Layout({ children }) {
  return (
    <Container>
      <Sidebar>
        <Menu href="/" replace={true}>
          <IconDashBoard size={15} />
          <MenuItem>Dashboards</MenuItem>
        </Menu>
        <Menu href="/VisitorList">
          <IconList size={15} />
          <MenuItem>Lista</MenuItem>
        </Menu>
      </Sidebar>
      <Content>{children}</Content>
    </Container>
  );
}
