import Header from "@/pages/components/Header";
import Layout from "@/pages/components/Layout";
import {
  Container,
  Content,
  GraphItem,
  GraphSquad,
  GraphSquadsContent,
  GraphText,
  GraphTotalVisitors,
  Grid,
  LineChartContent,
} from "./styles";
import BiaxialLineChart from "@/pages/components/BiaxialLineChart";
import BarProgress from "@/pages/components/BarProgress";

export default function DashBoard() {
  return (
    <Layout>
      <Container>
        <Header
          title="Dashboards"
          subTitle="Tela para análise de dados"
        ></Header>
        <Grid>
          <Content>
            <br />
            <GraphSquadsContent>
              <GraphSquad>
                <GraphItem>
                  <h1>Visitantes do dia</h1>
                  <h1>20/11/2023</h1>
                </GraphItem>
                <p>2 visitantes</p>
              </GraphSquad>
              <GraphSquad>
                <GraphItem>
                  <h1>Total dos visitantes</h1>
                  <h1>novembro</h1>
                </GraphItem>
                <GraphTotalVisitors>
                  <GraphItem>
                    <h3>
                      Meta de visitantes por mês: <GraphText>100</GraphText>
                    </h3>
                    <h3>
                      Total de visitantes do mês: <GraphText>80</GraphText>
                    </h3>
                  </GraphItem>
                </GraphTotalVisitors>
              </GraphSquad>
              <GraphSquad>
                <h1>Análise da meta</h1>
                <BarProgress />
              </GraphSquad>
            </GraphSquadsContent>
            <br />
            <h1>Total de visitantes por mês</h1>
            <br />
            <LineChartContent>
              <BiaxialLineChart />
            </LineChartContent>
          </Content>
        </Grid>
      </Container>
    </Layout>
  );
}
