import { DirectionsBus, RestartAlt, Percent } from "@mui/icons-material";
import { useState } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
  Bar,
  BarChart,
  Pie,
  PieChart,
  Sector
} from "recharts";
import { CategoryItemComponent, CustomerComponent } from "./components";

export const renderDefaultChart = () => {
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

  return (
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
  );
};

export const renderIPCChart = () => {
  const data = [
    {
      name: "JAN",
      IPC_FIPE: 0.58,
      amt: 2400
    },
    {
      name: "FEV",
      IPC_FIPE: 0.54,
      amt: 2210
    },
    {
      name: "MAR",
      IPC_FIPE: 0.51,
      amt: 2290
    },
    {
      name: "ABRIL",
      IPC_FIPE: 0.29,
      amt: 2000
    },
    {
      name: "MAIO",
      IPC_FIPE: -0.02,
      amt: 2000
    },
    {
      name: "JUN",
      IPC_FIPE: 0.15,
      amt: 2000
    },
    {
      name: "JUL",
      IPC_FIPE: 0.33,
      amt: 2000
    },
    {
      name: "AGO",
      IPC_FIPE: 0.0,
      amt: 2000
    },
    {
      name: "SET",
      IPC_FIPE: 0.29,
      amt: 2000
    },
    {
      name: "OUT",
      IPC_FIPE: 0.16,
      amt: 2000
    },
    {
      name: "NOV",
      IPC_FIPE: 0.68,
      amt: 2000
    },
    {
      name: "DEZ",
      IPC_FIPE: 0.94,
      amt: 2000
    }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="IPC_FIPE"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const renderSelicChart = () => {
  const data = [
    {
      name: "JAN",
      SELIC: 0.54
    },
    {
      name: "FEV",
      SELIC: 0.49
    },
    {
      name: "MAR",
      SELIC: 0.47
    },
    {
      name: "ABRIL",
      SELIC: 0.52
    },
    {
      name: "MAIO",
      SELIC: 0.54
    },
    {
      name: "JUN",
      SELIC: 0.47
    },
    {
      name: "JUL",
      SELIC: 0.57
    },
    {
      name: "AGO",
      SELIC: 0.5
    },
    {
      name: "SET",
      SELIC: 0.46
    },
    {
      name: "OUT",
      SELIC: 0.48
    },
    {
      name: "NOV",
      SELIC: 0.38
    },
    {
      name: "DEZ",
      SELIC: 0.37
    }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" unit="" />
        <YAxis unit="" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="SELIC"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const renderExportationChart = () => {
  const data = [
    {
      name: "JAN",
      exportação: 348
    },
    {
      name: "FEV",
      exportação: 711
    },
    {
      name: "MAR",
      exportação: 1021
    },
    {
      name: "ABRIL",
      exportação: 563
    },
    {
      name: "MAIO",
      exportação: 551
    },
    {
      name: "JUN",
      exportação: 603
    },
    {
      name: "JUL",
      exportação: 512
    },
    {
      name: "AGO",
      exportação: 446
    },
    {
      name: "SET",
      exportação: 464
    },
    {
      name: "OUT",
      exportação: 497
    },
    {
      name: "NOV",
      exportação: 645
    },
    {
      name: "DEZ",
      exportação: 775
    }
  ];

  return (
    <ResponsiveContainer height="100%" width="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="exportação" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const renderUnemploymentChart = () => {
  const data = [
    {
      name: "JAN",
      Taxa_Desemprego: 12.2
    },
    {
      name: "FEV",
      Taxa_Desemprego: 12.6
    },
    {
      name: "MAR",
      Taxa_Desemprego: 12.8
    },
    {
      name: "ABRIL",
      Taxa_Desemprego: 12.6
    },
    {
      name: "MAIO",
      Taxa_Desemprego: 12.4
    },
    {
      name: "JUN",
      Taxa_Desemprego: 12.1
    },
    {
      name: "JUL",
      Taxa_Desemprego: 12
    },
    {
      name: "AGO",
      Taxa_Desemprego: 11.9
    },
    {
      name: "SET",
      Taxa_Desemprego: 11.9
    },
    {
      name: "OUT",
      Taxa_Desemprego: 11.8
    },
    {
      name: "NOV",
      Taxa_Desemprego: 11.3
    },
    {
      name: "DEZ",
      Taxa_Desemprego: 11.1
    }
  ];

  return (
    <ResponsiveContainer height="100%" width="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="Taxa_Desemprego" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const renderSalesByDealership = () => {
  const data = [
    {
      name: "JAN",
      Vendas_Ônibus: 2200
    },
    {
      name: "FEV",
      Vendas_Ônibus: 2000
    },
    {
      name: "MAR",
      Vendas_Ônibus: 2010
    },
    {
      name: "ABRIL",
      Vendas_Ônibus: 2140
    },
    {
      name: "MAIO",
      Vendas_Ônibus: 2100
    },
    {
      name: "JUN",
      Vendas_Ônibus: 1990
    },
    {
      name: "JUL",
      Vendas_Ônibus: 2400
    },
    {
      name: "AGO",
      Vendas_Ônibus: 2700
    },
    {
      name: "SET",
      Vendas_Ônibus: 2320
    },
    {
      name: "OUT",
      Vendas_Ônibus: 2700
    },
    {
      name: "NOV",
      Vendas_Ônibus: 2220
    },
    {
      name: "DEZ",
      Vendas_Ônibus: 2420
    }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Vendas_Ônibus" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const renderProconveRenovationChart = () => {
  const data3 = [
    { name: "Proconve P8", value: 2756 },
    { name: "Proconve P7", value: 1916 }
  ];

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

  const [activeData3Index, setActiveData3Index] = useState(0);

  return (
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
  );
};

export const renderBusSalesChart = () => {
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

  return (
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
  );
};

export const CUSTOMERS_MOCK_LIST = [
  {
    name: "Unesul",
    totBuses: 100,
    oldBuses: 50,
    newBuses: 40
  },
  {
    name: "Guanabara",
    totBuses: 100,
    oldBuses: 50,
    newBuses: 40
  },
  {
    name: "Lopestur",
    totBuses: 100,
    oldBuses: 50,
    newBuses: 40
  },
  {
    name: "RealMaia",
    totBuses: 100,
    oldBuses: 50,
    newBuses: 40
  },
  {
    name: "Expresso",
    totBuses: 100,
    oldBuses: 50,
    newBuses: 40
  },
  {
    name: "Viação Ouro e Prata",
    totBuses: 100,
    oldBuses: 50,
    newBuses: 40
  },
  {
    name: "Gontijo",
    totBuses: 100,
    oldBuses: 50,
    newBuses: 40
  },
  {
    name: "Lopes Sul",
    totBuses: 100,
    oldBuses: 50,
    newBuses: 40
  },
  {
    name: "Cometa",
    totBuses: 100,
    oldBuses: 50,
    newBuses: 40
  },
  {
    name: "BlueMob",
    totBuses: 100,
    oldBuses: 50,
    newBuses: 40
  },
  {
    name: "Metra",
    totBuses: 100,
    oldBuses: 50,
    newBuses: 40
  },
  {
    name: "Bompani",
    totBuses: 100,
    oldBuses: 50,
    newBuses: 40
  },
  {
    name: "Marcopolo",
    totBuses: 100,
    oldBuses: 50,
    newBuses: 40
  },
  {
    name: "Busscar",
    totBuses: 100,
    oldBuses: 50,
    newBuses: 40
  },
  {
    name: "Grupo JCA",
    totBuses: 100,
    oldBuses: 50,
    newBuses: 40
  }
];

export const renderFleetRenewalData = () => {
  return (
    <>
      {CUSTOMERS_MOCK_LIST.map(
        ({ name, totBuses, newBuses, oldBuses }, index) => (
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <CustomerComponent
              name={name}
              img={`https://picsum.photos/200/300?random=${index}`}
            />
            <div style={{ display: "flex", gap: "16px" }}>
              <CategoryItemComponent
                value={totBuses}
                icon={DirectionsBus}
                title="Ônibus"
              />
              <CategoryItemComponent
                value={oldBuses}
                icon={RestartAlt}
                title="+10 anos"
              />
              <CategoryItemComponent
                value={newBuses}
                icon={Percent}
                title="Renovados"
                isPercentage
              />
            </div>
          </div>
        )
      )}
    </>
  );
};
