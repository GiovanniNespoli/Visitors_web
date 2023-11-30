import { useState, useEffect } from "react";
import {
  Container,
  FillGraph,
  GraphContent,
  GraphInformations,
} from "./styles";
import { useVisitors } from "@/pages/hooks/visitors";

export default function BarProgress() {
  const { GetMonthVisitors } = useVisitors();

  const [monthVisitor, setMonthVisitorVisitor] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);

  const month = GetMonthVisitors();

  useEffect(() => {
    if (month.data) setMonthVisitorVisitor(month.data);
  }, [month]);

  useEffect(() => {
    setPercentage(Math.round((monthVisitor * 100) / 15));
  }, [monthVisitor]);

  return (
    <Container>
      <h2>{percentage}%</h2>
      <GraphContent>
        <FillGraph total={percentage} />
      </GraphContent>
      <GraphInformations>
        <h3>0</h3>
        <h3>100</h3>
      </GraphInformations>
    </Container>
  );
}
