import { Container } from "./styles";

interface IHeaderProps {
  title: string;
  subTitle: string;
}

export default function Header({ subTitle, title }: IHeaderProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
    </Container>
  );
}
