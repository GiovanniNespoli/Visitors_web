import {
  Container,
  FillGraph,
  GraphContent,
  GraphInformations,
} from "./styles";

export default function BarProgress() {
  return (
    <Container>
      <h2>80%</h2>
      <GraphContent>
        <FillGraph />
      </GraphContent>
      <GraphInformations>
        <h3>0</h3>
        <h3>100</h3>
      </GraphInformations>
    </Container>
  );
}
