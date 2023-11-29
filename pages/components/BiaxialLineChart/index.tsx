import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";
import theme from "@/styles/theme";

const data = [
  {
    name: "Janeiro",
    total: 5,
  },
  {
    name: "Fevereiro",
    total: 3,
  },
  {
    name: "Março",
    total: 10,
  },
  {
    name: "Abril",
    total: 32,
  },
  {
    name: "Maio",
    total: 23,
  },
  {
    name: "Junho",
    total: 15,
  },
  {
    name: "Julho",
    total: 10,
  },
  {
    name: "Agosto",
    total: 20,
  },
  {
    name: "Setembro",
    total: 17,
  },
  {
    name: "Outubro",
    total: 15,
  },
  {
    name: "Novembro",
    total: 22,
  },
  {
    name: "Dezembro",
    total: 40,
  },
];

export default function BiaxialLineChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="linear"
            dataKey="total"
            stroke={theme.primary}
            strokeWidth={2}
            fill={theme.linearChartBackgorund}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
