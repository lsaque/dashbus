import React, { useState } from "react";
import {
  DirectionsBus,
  InfoOutlined,
  Percent,
  RestartAlt
} from "@mui/icons-material";
import { CardContent, Divider } from "@mui/material";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
  Pie,
  PieChart,
  Sector,
  ComposedChart,
  Scatter
} from "recharts";

import {
  CardComponent,
  CardContentComponent,
  CardHeaderComponent
} from "../../common";

import { GeneralStyles, GridLayoutStyles } from "./General.styles";
import { CategoryItemComponent, CustomerComponent } from "./components";

const data1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const data2 = [
  { index: 10000, red: 1643, blue: 790 },
  { index: 1666, red: 182, blue: 42 },
  { index: 625, red: 56, blue: 11 },
  // Calculation of line of best fit is not included in this demo
  { index: 300, redLine: 0 },
  { index: 10000, redLine: 1522 },
  { index: 600, blueLine: 0 },
  { index: 10000, blueLine: 678 }
];

const data3 = [
  { name: "Proconve P8", value: 2756 },
  { name: "Proconve P7", value: 1916 }
];

export const GeneralPage: React.FC = () => {
  const [activeData3Index, setActiveData3Index] = useState(0);

  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`PV ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  return (
    <GeneralStyles>
      <GridLayoutStyles>
        <CardComponent gridArea="a">
          <CardHeaderComponent title="Vendas - ÔNIBUS" />
          <Divider />
          <CardContentComponent>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data1}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContentComponent>
        </CardComponent>
        <CardComponent gridArea="b">
          <CardHeaderComponent title="Projeção p/ Dezembro" />
          <Divider />
          <CardContentComponent>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                width={500}
                height={400}
                data={data2}
                margin={{
                  top: 20,
                  right: 80,
                  bottom: 20,
                  left: 20
                }}
              >
                <Tooltip />
                <Legend />
                <XAxis dataKey="index" type="number" />
                <YAxis unit="ms" type="number" />
                <Scatter name="red" dataKey="red" fill="red" />
                <Scatter name="blue" dataKey="blue" fill="blue" />
                <Line
                  dataKey="blueLine"
                  stroke="blue"
                  dot={false}
                  activeDot={false}
                  legendType="none"
                />
                <Line
                  dataKey="redLine"
                  stroke="red"
                  dot={false}
                  activeDot={false}
                  legendType="none"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContentComponent>
        </CardComponent>
        <CardComponent gridArea="c">
          <CardHeaderComponent title="Clientes" />
          <Divider />
          <CardContentComponent>
            {[...Array(50)].map((_, index) => (
              <CustomerComponent
                name="Isaque"
                img={`https://picsum.photos/200/300?random=${index}`}
                isOnline={Boolean(Math.random())}
              />
            ))}
          </CardContentComponent>
        </CardComponent>
        <CardComponent gridArea="d">
          <CardHeaderComponent title="Renovação de frota (Clientes Scania)" />
          <Divider />
          <CardContentComponent>
            {[...Array(10)].map((_, index) => (
              <div
                style={{ display: "flex", alignItems: "center", gap: "16px" }}
              >
                <CustomerComponent
                  name="Isaque"
                  img={`https://picsum.photos/200/300?random=${index}`}
                />
                <div style={{ display: "flex", gap: "16px" }}>
                  <CategoryItemComponent
                    value={125}
                    icon={DirectionsBus}
                    title="Ônibus"
                  />
                  <CategoryItemComponent
                    value={50}
                    icon={RestartAlt}
                    title="+10 anos"
                  />
                  <CategoryItemComponent
                    value={40}
                    icon={Percent}
                    title="Renovados"
                    isPercentage
                  />
                </div>
              </div>
            ))}
          </CardContentComponent>
        </CardComponent>
        <CardComponent gridArea="e">
          <CardHeaderComponent title="Renovação Proconve" />
          <Divider />
          <CardContentComponent>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  activeIndex={activeData3Index}
                  activeShape={renderActiveShape}
                  data={data3}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#7974ce"
                  dataKey="value"
                  onMouseEnter={(_, index) => setActiveData3Index(index)}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContentComponent>
        </CardComponent>
      </GridLayoutStyles>
    </GeneralStyles>
  );
};
