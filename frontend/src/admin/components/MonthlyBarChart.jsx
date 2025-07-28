import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  { name: "Jan", value: 16 },
  { name: "Feb", value: 58 },
  { name: "Mar", value: 36 },
  { name: "Apr", value: 33 },
  { name: "May", value: 79 },
  { name: "Jun", value: 86 },
  { name: "Jul", value: 54 },
  { name: "Aug", value: 27 },
  { name: "Sep", value: 80 },
  { name: "Oct", value: 78 },
  { name: "Nov", value: 97 },
  { name: "Dec", value: 76 },
];

const MonthlyBarChart = () => {
  return (
    <div className="w-full sm:p-4 bg-[#0A090D] rounded-xl  overflow-hidden">
      <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 30,
            }}
          >
            <CartesianGrid stroke="#1E2337" strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              stroke="#FFD700"
              tick={{
                fill: "#FFD700",
                fontSize: window.innerWidth < 640 ? 10 : 11,
              }}
              interval={0}
              angle={window.innerWidth < 640 ? -45 : 0}
              textAnchor={window.innerWidth < 640 ? "end" : "middle"}
              height={window.innerWidth < 640 ? 60 : 40}
            />
            <YAxis
              stroke="#FFD700"
              tick={{
                fill: "#FFD700",
                fontSize: window.innerWidth < 640 ? 10 : 11,
              }}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{ backgroundColor: "#28272B", border: "none" }}
              labelStyle={{ color: "#FFD700" }}
              itemStyle={{ color: "#FFD700" }}
            />
            <Legend
              verticalAlign="bottom"
              wrapperStyle={{
                color: "#FFD700",
                paddingTop: "10px",
                fontSize: window.innerWidth < 640 ? "10px" : "12px",
              }}
            />
            <Bar
              dataKey="value"
              fill="#28272B"
              radius={[2, 2, 0, 0]}
              name="2025"
              maxBarSize={window.innerWidth < 640 ? 30 : 40}
            >
              <LabelList
                dataKey="value"
                position="top"
                fill="#FFD700"
                style={{
                  fontSize: window.innerWidth < 640 ? 8 : 10,
                  fontWeight: 500,
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyBarChart;
