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
  CardHeaderComponent,
  CUSTOMERS_MOCK_LIST,
  renderFleetRenewalData,
  renderProconveRenovationChart
} from "../../common";

import { GeneralStyles, GridLayoutStyles } from "./General.styles";
import {
  CategoryItemComponent,
  CustomerComponent
} from "../../common/data/components";

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

export const GeneralPage: React.FC = () => {
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
            {CUSTOMERS_MOCK_LIST.map(({ name }, index) => (
              <CustomerComponent
                name={name}
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
            {renderFleetRenewalData()}
          </CardContentComponent>
        </CardComponent>
        <CardComponent gridArea="e">
          <CardHeaderComponent title="Renovação Proconve" />
          <Divider />
          <CardContentComponent>
            {renderProconveRenovationChart()}
          </CardContentComponent>
        </CardComponent>
      </GridLayoutStyles>
    </GeneralStyles>
  );
};
