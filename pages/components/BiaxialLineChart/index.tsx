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
import { IDataPerMonth } from "@/pages/interfaces/IVistors";
import { useEffect } from "react";

interface IChartProps {
  data: IDataPerMonth[];
}

export default function BiaxialLineChart({ data }: IChartProps) {
  useEffect(() => {
    console.log("DATA", data);
  }, [data]);

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
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="linear"
            dataKey="value"
            stroke={theme.primary}
            strokeWidth={2}
            fill={theme.linearChartBackgorund}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
