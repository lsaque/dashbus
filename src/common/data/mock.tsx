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
  Sector,
  Area,
  AreaChart,
  ComposedChart
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
          stroke="#84d89d"
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
        <Bar dataKey="exportação" fill="#d88499" />
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
        <Bar yAxisId="left" dataKey="Taxa_Desemprego" fill="#1d918b" />
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
        <Line type="monotone" dataKey="uv" stroke="#9149bb" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const CUSTOMERS_MOCK_LIST = [
  {
    name: "Unesul",
    totBuses: 317,
    oldBuses: 208,
    newBuses: 35
  },
  {
    name: "Guanabara",
    totBuses: 400,
    oldBuses: 59,
    newBuses: 85
  },
  {
    name: "Lopestur",
    totBuses: 27,
    oldBuses: 12,
    newBuses: 56
  },
  {
    name: "RealMaia",
    totBuses: 155,
    oldBuses: 97,
    newBuses: 38
  },
  {
    name: "Expresso",
    totBuses: 7200,
    oldBuses: 4919,
    newBuses: 32
  },
  {
    name: "Viação Ouro e Prata",
    totBuses: 220,
    oldBuses: 68,
    newBuses: 70
  },
  {
    name: "Gontijo",
    totBuses: 1500,
    oldBuses: 682,
    newBuses: 55
  },
  {
    name: "Lopes Sul",
    totBuses: 28,
    oldBuses: 15,
    newBuses: 47
  },
  {
    name: "Cometa",
    totBuses: 3207,
    oldBuses: 1829,
    newBuses: 43
  },
  {
    name: "BlueMob",
    totBuses: 246,
    oldBuses: 123,
    newBuses: 50
  },
  {
    name: "253",
    totBuses: 129,
    oldBuses: 50,
    newBuses: 49
  },
  {
    name: "Bompani",
    totBuses: 182,
    oldBuses: 97,
    newBuses: 47
  },
  {
    name: "Marcopolo",
    totBuses: 68,
    oldBuses: 38,
    newBuses: 45
  },
  {
    name: "Busscar",
    totBuses: 68,
    oldBuses: 42,
    newBuses: 39
  },
  {
    name: "Grupo JCA",
    totBuses: 1230,
    oldBuses: 851,
    newBuses: 31
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

export const renderServiceBillingChart = () => {
  const data = [
    {
      name: "Convencional com sanitário",
      Faturamento_Por_Serviço: 61.42
    },
    {
      name: "Executivo",
      Faturamento_Por_Serviço: 45.68
    },
    {
      name: "Semileito",
      Faturamento_Por_Serviço: 13.29
    },
    {
      name: "Leito com ar condicionado",
      Faturamento_Por_Serviço: 12.95
    },
    {
      name: "Convencional sem sanitário",
      Faturamento_Por_Serviço: 2.35
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
        <Bar dataKey="Faturamento_Por_Serviço" fill="#130f40" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const renderDollarChart = () => {
  const data = [
    {
      name: "31.12",
      Dolar: 4.195
    },
    {
      name: "30.12",
      Dolar: 4.195
    },
    {
      name: "27.12",
      Dolar: 4.459
    },
    {
      name: "26.12",
      Dolar: 4.56
    },
    {
      name: "25.12",
      Dolar: 4.838
    },
    {
      name: "24.12",
      Dolar: 4.838
    },
    {
      name: "23.12",
      Dolar: 4.836
    },
    {
      name: "20.12",
      Dolar: 4.1025
    },
    {
      name: "19.12",
      Dolar: 4.697
    },
    {
      name: "18.12",
      Dolar: 4.634
    },
    {
      name: "17.12",
      Dolar: 4.718
    },
    {
      name: "16.12",
      Dolar: 4.632
    },
    {
      name: "13.12",
      Dolar: 4.1082
    },
    {
      name: "12.12",
      Dolar: 4.908
    },
    {
      name: "11.12",
      Dolar: 4.1242
    },
    {
      name: "10.12",
      Dolar: 4.147
    },
    {
      name: "09.12",
      Dolar: 4.1425
    },
    {
      name: "06.12",
      Dolar: 4.1414
    },
    {
      name: "05.12",
      Dolar: 4.186
    },
    {
      name: "04.12",
      Dolar: 4.208
    },
    {
      name: "03.12",
      Dolar: 4.2066
    },
    {
      name: "02.12",
      Dolar: 4.2234
    },
    {
      name: "29.11",
      Dolar: 4.2367
    },
    {
      name: "28.11",
      Dolar: 4.1903
    },
    {
      name: "27.11",
      Dolar: 4.2638
    },
    {
      name: "26.11",
      Dolar: 4.2332
    },
    {
      name: "25.11",
      Dolar: 4.2269
    },
    {
      name: "22.11",
      Dolar: 4.1966
    },
    {
      name: "21.11",
      Dolar: 4.1932
    },
    {
      name: "20.11",
      Dolar: 4.1965
    },
    {
      name: "19.11",
      Dolar: 4.1945
    },
    {
      name: "18.11",
      Dolar: 4.218
    },
    {
      name: "15.11",
      Dolar: 4.1962
    },
    {
      name: "14.11",
      Dolar: 4.1951
    },
    {
      name: "13.11",
      Dolar: 4.1705
    },
    {
      name: "12.11",
      Dolar: 4.1677
    },
    {
      name: "11.11",
      Dolar: 4.1518
    },
    {
      name: "08.11",
      Dolar: 4.1635
    },
    {
      name: "07.11",
      Dolar: 4.1007
    },
    {
      name: "06.11",
      Dolar: 4.837
    },
    {
      name: "05.11",
      Dolar: 3.9938
    },
    {
      name: "04.11",
      Dolar: 4.156
    },
    {
      name: "01.11",
      Dolar: 3.9904
    },
    {
      name: "31.10",
      Dolar: 4.184
    },
    {
      name: "30.10",
      Dolar: 3.9909
    },
    {
      name: "29.10",
      Dolar: 3.9986
    },
    {
      name: "28.10",
      Dolar: 3.991
    },
    {
      name: "25.10",
      Dolar: 4.38
    },
    {
      name: "24.10",
      Dolar: 4.414
    },
    {
      name: "23.10",
      Dolar: 4.345
    },
    {
      name: "22.10",
      Dolar: 4.819
    },
    {
      name: "21.10",
      Dolar: 4.1294
    },
    {
      name: "18.10",
      Dolar: 4.1118
    },
    {
      name: "17.10",
      Dolar: 4.1643
    },
    {
      name: "16.10",
      Dolar: 4.1518
    },
    {
      name: "15.10",
      Dolar: 4.1807
    },
    {
      name: "14.10",
      Dolar: 4.1265
    },
    {
      name: "11.10",
      Dolar: 4.1097
    },
    {
      name: "10.10",
      Dolar: 4.1095
    },
    {
      name: "09.10",
      Dolar: 4.1104
    },
    {
      name: "08.10",
      Dolar: 4.954
    },
    {
      name: "07.10",
      Dolar: 4.1071
    },
    {
      name: "04.10",
      Dolar: 4.556
    },
    {
      name: "03.10",
      Dolar: 4.84
    },
    {
      name: "02.10",
      Dolar: 4.1293
    },
    {
      name: "01.10",
      Dolar: 4.1591
    },
    {
      name: "30.09",
      Dolar: 4.1556
    },
    {
      name: "27.09",
      Dolar: 4.1602
    },
    {
      name: "26.09",
      Dolar: 4.1711
    },
    {
      name: "25.09",
      Dolar: 4.1491
    },
    {
      name: "24.09",
      Dolar: 4.165
    },
    {
      name: "23.09",
      Dolar: 4.1638
    },
    {
      name: "20.09",
      Dolar: 4.148
    },
    {
      name: "19.09",
      Dolar: 4.1678
    },
    {
      name: "18.09",
      Dolar: 4.1112
    },
    {
      name: "17.09",
      Dolar: 4.777
    },
    {
      name: "16.09",
      Dolar: 4.81
    },
    {
      name: "13.09",
      Dolar: 4.849
    },
    {
      name: "12.09",
      Dolar: 4.608
    },
    {
      name: "11.09",
      Dolar: 4.68
    },
    {
      name: "10.09",
      Dolar: 4.808
    },
    {
      name: "09.09",
      Dolar: 4.953
    },
    {
      name: "06.09",
      Dolar: 4.618
    },
    {
      name: "05.09",
      Dolar: 4.1095
    },
    {
      name: "04.09",
      Dolar: 4.951
    },
    {
      name: "03.09",
      Dolar: 4.1681
    },
    {
      name: "02.09",
      Dolar: 4.1871
    },
    {
      name: "30.08",
      Dolar: 4.1454
    },
    {
      name: "29.08",
      Dolar: 4.1687
    },
    {
      name: "28.08",
      Dolar: 4.1682
    },
    {
      name: "27.08",
      Dolar: 4.1311
    },
    {
      name: "26.08",
      Dolar: 4.1571
    },
    {
      name: "23.08",
      Dolar: 4.1198
    },
    {
      name: "22.08",
      Dolar: 4.707
    },
    {
      name: "21.08",
      Dolar: 4.269
    },
    {
      name: "20.08",
      Dolar: 4.542
    },
    {
      name: "19.08",
      Dolar: 4.743
    },
    {
      name: "16.08",
      Dolar: 4.58
    },
    {
      name: "15.08",
      Dolar: 3.991
    },
    {
      name: "14.08",
      Dolar: 4.526
    },
    {
      name: "13.08",
      Dolar: 3.966
    },
    {
      name: "12.08",
      Dolar: 3.9855
    },
    {
      name: "09.08",
      Dolar: 3.9416
    },
    {
      name: "08.08",
      Dolar: 3.9199
    },
    {
      name: "07.08",
      Dolar: 3.9691
    },
    {
      name: "06.08",
      Dolar: 3.9612
    },
    {
      name: "05.08",
      Dolar: 3.9783
    },
    {
      name: "02.08",
      Dolar: 3.8893
    },
    {
      name: "01.08",
      Dolar: 3.8403
    },
    {
      name: "31.07",
      Dolar: 3.8129
    },
    {
      name: "30.07",
      Dolar: 3.7906
    },
    {
      name: "29.07",
      Dolar: 3.7816
    },
    {
      name: "26.07",
      Dolar: 3.7762
    },
    {
      name: "25.07",
      Dolar: 3.779
    },
    {
      name: "24.07",
      Dolar: 3.7736
    },
    {
      name: "23.07",
      Dolar: 3.7737
    },
    {
      name: "22.07",
      Dolar: 3.7407
    },
    {
      name: "19.07",
      Dolar: 3.7494
    },
    {
      name: "18.07",
      Dolar: 3.7194
    },
    {
      name: "17.07",
      Dolar: 3.7641
    },
    {
      name: "16.07",
      Dolar: 3.7687
    },
    {
      name: "15.07",
      Dolar: 3.7567
    },
    {
      name: "12.07",
      Dolar: 3.7373
    },
    {
      name: "11.07",
      Dolar: 3.7551
    },
    {
      name: "10.07",
      Dolar: 3.7546
    },
    {
      name: "09.07",
      Dolar: 3.8005
    },
    {
      name: "08.07",
      Dolar: 3.8073
    },
    {
      name: "05.07",
      Dolar: 3.8221
    },
    {
      name: "04.07",
      Dolar: 3.8011
    },
    {
      name: "03.07",
      Dolar: 3.8272
    },
    {
      name: "02.07",
      Dolar: 3.8456
    },
    {
      name: "01.07",
      Dolar: 3.8405
    },
    {
      name: "28.06",
      Dolar: 3.852
    },
    {
      name: "27.06",
      Dolar: 3.8196
    },
    {
      name: "26.06",
      Dolar: 3.8445
    },
    {
      name: "25.06",
      Dolar: 3.848
    },
    {
      name: "24.06",
      Dolar: 3.8254
    },
    {
      name: "21.06",
      Dolar: 3.8192
    },
    {
      name: "20.06",
      Dolar: 3.839
    },
    {
      name: "19.06",
      Dolar: 3.839
    },
    {
      name: "18.06",
      Dolar: 3.8604
    },
    {
      name: "17.06",
      Dolar: 3.8883
    },
    {
      name: "14.06",
      Dolar: 3.8959
    },
    {
      name: "13.06",
      Dolar: 3.8487
    },
    {
      name: "12.06",
      Dolar: 3.8672
    },
    {
      name: "11.06",
      Dolar: 3.8571
    },
    {
      name: "10.06",
      Dolar: 3.8887
    },
    {
      name: "07.06",
      Dolar: 3.8789
    },
    {
      name: "06.06",
      Dolar: 3.8799
    },
    {
      name: "05.06",
      Dolar: 3.8811
    },
    {
      name: "04.06",
      Dolar: 3.8548
    },
    {
      name: "03.06",
      Dolar: 3.8859
    },
    {
      name: "31.05",
      Dolar: 3.9228
    },
    {
      name: "30.05",
      Dolar: 3.9818
    },
    {
      name: "29.05",
      Dolar: 3.9747
    },
    {
      name: "28.05",
      Dolar: 4.247
    },
    {
      name: "27.05",
      Dolar: 4.423
    },
    {
      name: "24.05",
      Dolar: 4.225
    },
    {
      name: "23.05",
      Dolar: 4.401
    },
    {
      name: "22.05",
      Dolar: 4.403
    },
    {
      name: "21.05",
      Dolar: 4.39
    },
    {
      name: "20.05",
      Dolar: 4.968
    },
    {
      name: "17.05",
      Dolar: 4.999
    },
    {
      name: "16.05",
      Dolar: 4.47
    },
    {
      name: "15.05",
      Dolar: 4.17
    },
    {
      name: "14.05",
      Dolar: 3.9751
    },
    {
      name: "13.05",
      Dolar: 3.9939
    },
    {
      name: "10.05",
      Dolar: 3.9572
    },
    {
      name: "09.05",
      Dolar: 3.9466
    },
    {
      name: "08.05",
      Dolar: 3.9285
    },
    {
      name: "07.05",
      Dolar: 3.971
    },
    {
      name: "06.05",
      Dolar: 3.9695
    },
    {
      name: "03.05",
      Dolar: 3.9382
    },
    {
      name: "02.05",
      Dolar: 3.9661
    },
    {
      name: "01.05",
      Dolar: 3.9202
    },
    {
      name: "30.04",
      Dolar: 3.9215
    },
    {
      name: "29.04",
      Dolar: 3.9456
    },
    {
      name: "26.04",
      Dolar: 3.9292
    },
    {
      name: "25.04",
      Dolar: 3.9542
    },
    {
      name: "24.04",
      Dolar: 3.9927
    },
    {
      name: "23.04",
      Dolar: 3.9211
    },
    {
      name: "22.04",
      Dolar: 3.9365
    },
    {
      name: "19.04",
      Dolar: 3.9275
    },
    {
      name: "18.04",
      Dolar: 3.9273
    },
    {
      name: "17.04",
      Dolar: 3.9382
    },
    {
      name: "16.04",
      Dolar: 3.904
    },
    {
      name: "15.04",
      Dolar: 3.8723
    },
    {
      name: "12.04",
      Dolar: 3.8819
    },
    {
      name: "11.04",
      Dolar: 3.8582
    },
    {
      name: "10.04",
      Dolar: 3.8251
    },
    {
      name: "09.04",
      Dolar: 3.851
    },
    {
      name: "08.04",
      Dolar: 3.8495
    },
    {
      name: "05.04",
      Dolar: 3.8735
    },
    {
      name: "04.04",
      Dolar: 3.859
    },
    {
      name: "03.04",
      Dolar: 3.87
    },
    {
      name: "02.04",
      Dolar: 3.8537
    },
    {
      name: "01.04",
      Dolar: 3.8518
    },
    {
      name: "29.03",
      Dolar: 3.9247
    },
    {
      name: "28.03",
      Dolar: 3.901
    },
    {
      name: "27.03",
      Dolar: 3.9935
    },
    {
      name: "26.03",
      Dolar: 3.8773
    },
    {
      name: "25.03",
      Dolar: 3.8544
    },
    {
      name: "22.03",
      Dolar: 3.9071
    },
    {
      name: "21.03",
      Dolar: 3.793
    },
    {
      name: "20.03",
      Dolar: 3.7763
    },
    {
      name: "19.03",
      Dolar: 3.7892
    },
    {
      name: "18.03",
      Dolar: 3.7915
    },
    {
      name: "15.03",
      Dolar: 3.8144
    },
    {
      name: "14.03",
      Dolar: 3.8442
    },
    {
      name: "13.03",
      Dolar: 3.8147
    },
    {
      name: "12.03",
      Dolar: 3.8114
    },
    {
      name: "11.03",
      Dolar: 3.8403
    },
    {
      name: "08.03",
      Dolar: 3.8669
    },
    {
      name: "07.03",
      Dolar: 3.8704
    },
    {
      name: "06.03",
      Dolar: 3.84
    },
    {
      name: "05.03",
      Dolar: 3.7755
    },
    {
      name: "04.03",
      Dolar: 3.7755
    },
    {
      name: "01.03",
      Dolar: 3.7752
    },
    {
      name: "28.02",
      Dolar: 3.7514
    },
    {
      name: "27.02",
      Dolar: 3.7287
    },
    {
      name: "26.02",
      Dolar: 3.7489
    },
    {
      name: "25.02",
      Dolar: 3.7522
    },
    {
      name: "22.02",
      Dolar: 3.7485
    },
    {
      name: "21.02",
      Dolar: 3.7695
    },
    {
      name: "20.02",
      Dolar: 3.7277
    },
    {
      name: "19.02",
      Dolar: 3.723
    },
    {
      name: "18.02",
      Dolar: 3.7353
    },
    {
      name: "15.02",
      Dolar: 3.7008
    },
    {
      name: "14.02",
      Dolar: 3.7233
    },
    {
      name: "13.02",
      Dolar: 3.7544
    },
    {
      name: "12.02",
      Dolar: 3.7098
    },
    {
      name: "11.02",
      Dolar: 3.7577
    },
    {
      name: "08.02",
      Dolar: 3.7292
    },
    {
      name: "07.02",
      Dolar: 3.7167
    },
    {
      name: "06.02",
      Dolar: 3.6983
    },
    {
      name: "05.02",
      Dolar: 3.6699
    },
    {
      name: "04.02",
      Dolar: 3.6687
    },
    {
      name: "01.02",
      Dolar: 3.6597
    },
    {
      name: "31.01",
      Dolar: 3.644
    },
    {
      name: "30.01",
      Dolar: 3.685
    },
    {
      name: "29.01",
      Dolar: 3.7202
    },
    {
      name: "28.01",
      Dolar: 3.7619
    },
    {
      name: "25.01",
      Dolar: 3.7707
    },
    {
      name: "24.01",
      Dolar: 3.7733
    },
    {
      name: "23.01",
      Dolar: 3.7663
    },
    {
      name: "22.01",
      Dolar: 3.8152
    },
    {
      name: "21.01",
      Dolar: 3.755
    },
    {
      name: "18.01",
      Dolar: 3.7517
    },
    {
      name: "17.01",
      Dolar: 3.7504
    },
    {
      name: "16.01",
      Dolar: 3.7366
    },
    {
      name: "15.01",
      Dolar: 3.7172
    },
    {
      name: "14.01",
      Dolar: 3.699
    },
    {
      name: "11.01",
      Dolar: 3.7113
    },
    {
      name: "10.01",
      Dolar: 3.7105
    },
    {
      name: "09.01",
      Dolar: 3.6807
    },
    {
      name: "08.01",
      Dolar: 3.7133
    },
    {
      name: "07.01",
      Dolar: 3.7356
    },
    {
      name: "04.01",
      Dolar: 3.7155
    },
    {
      name: "03.01",
      Dolar: 3.7565
    },
    {
      name: "02.01",
      Dolar: 3.79
    },
    {
      name: "01.01",
      Dolar: 3.8812
    }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data.reverse()}
        width={500}
        height={300}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Dolar" stroke="#8884d8" fill="#d8d284" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export const renderEuroChart = () => {
  const data = [
    {
      name: "31.12",
      Euro: 4.5053
    },
    {
      name: "30.12",
      Euro: 4.5002
    },
    {
      name: "27.12",
      Euro: 4.521
    },
    {
      name: "26.12",
      Euro: 4.5002
    },
    {
      name: "25.12",
      Euro: 4.528
    },
    {
      name: "24.12",
      Euro: 4.5272
    },
    {
      name: "23.12",
      Euro: 4.5267
    },
    {
      name: "20.12",
      Euro: 4.5444
    },
    {
      name: "19.12",
      Euro: 4.5252
    },
    {
      name: "18.12",
      Euro: 4.5144
    },
    {
      name: "17.12",
      Euro: 4.5394
    },
    {
      name: "16.12",
      Euro: 4.5268
    },
    {
      name: "13.12",
      Euro: 4.5677
    },
    {
      name: "12.12",
      Euro: 4.5519
    },
    {
      name: "11.12",
      Euro: 4.589
    },
    {
      name: "10.12",
      Euro: 4.5995
    },
    {
      name: "09.12",
      Euro: 4.5821
    },
    {
      name: "06.12",
      Euro: 4.5788
    },
    {
      name: "05.12",
      Euro: 4.6477
    },
    {
      name: "04.12",
      Euro: 4.6604
    },
    {
      name: "03.12",
      Euro: 4.661
    },
    {
      name: "02.12",
      Euro: 4.6778
    },
    {
      name: "29.11",
      Euro: 4.6664
    },
    {
      name: "28.11",
      Euro: 4.6119
    },
    {
      name: "27.11",
      Euro: 4.6891
    },
    {
      name: "26.11",
      Euro: 4.6639
    },
    {
      name: "25.11",
      Euro: 4.6548
    },
    {
      name: "22.11",
      Euro: 4.6251
    },
    {
      name: "21.11",
      Euro: 4.6362
    },
    {
      name: "20.11",
      Euro: 4.6453
    },
    {
      name: "19.11",
      Euro: 4.6463
    },
    {
      name: "18.11",
      Euro: 4.669
    },
    {
      name: "15.11",
      Euro: 4.6362
    },
    {
      name: "14.11",
      Euro: 4.6232
    },
    {
      name: "13.11",
      Euro: 4.5897
    },
    {
      name: "12.11",
      Euro: 4.5872
    },
    {
      name: "11.11",
      Euro: 4.58
    },
    {
      name: "08.11",
      Euro: 4.5871
    },
    {
      name: "07.11",
      Euro: 4.5301
    },
    {
      name: "06.11",
      Euro: 4.5183
    },
    {
      name: "05.11",
      Euro: 4.4224
    },
    {
      name: "04.11",
      Euro: 4.4673
    },
    {
      name: "01.11",
      Euro: 4.4545
    },
    {
      name: "31.10",
      Euro: 4.4794
    },
    {
      name: "30.10",
      Euro: 4.4497
    },
    {
      name: "29.10",
      Euro: 4.4418
    },
    {
      name: "28.10",
      Euro: 4.4283
    },
    {
      name: "25.10",
      Euro: 4.4344
    },
    {
      name: "24.10",
      Euro: 4.4861
    },
    {
      name: "23.10",
      Euro: 4.4891
    },
    {
      name: "22.10",
      Euro: 4.5405
    },
    {
      name: "21.10",
      Euro: 4.6025
    },
    {
      name: "18.10",
      Euro: 4.5926
    },
    {
      name: "17.10",
      Euro: 4.6306
    },
    {
      name: "16.10",
      Euro: 4.5946
    },
    {
      name: "15.10",
      Euro: 4.6115
    },
    {
      name: "14.10",
      Euro: 4.5498
    },
    {
      name: "11.10",
      Euro: 4.536
    },
    {
      name: "10.10",
      Euro: 4.5214
    },
    {
      name: "09.10",
      Euro: 4.5071
    },
    {
      name: "08.10",
      Euro: 4.4848
    },
    {
      name: "07.10",
      Euro: 4.5052
    },
    {
      name: "04.10",
      Euro: 4.4503
    },
    {
      name: "03.10",
      Euro: 4.4768
    },
    {
      name: "02.10",
      Euro: 4.5242
    },
    {
      name: "01.10",
      Euro: 4.5449
    },
    {
      name: "30.09",
      Euro: 4.5282
    },
    {
      name: "27.09",
      Euro: 4.5501
    },
    {
      name: "26.09",
      Euro: 4.5548
    },
    {
      name: "25.09",
      Euro: 4.538
    },
    {
      name: "24.09",
      Euro: 4.5867
    },
    {
      name: "23.09",
      Euro: 4.5754
    },
    {
      name: "20.09",
      Euro: 4.569
    },
    {
      name: "19.09",
      Euro: 4.6004
    },
    {
      name: "18.09",
      Euro: 4.5336
    },
    {
      name: "17.09",
      Euro: 4.514
    },
    {
      name: "16.09",
      Euro: 4.4875
    },
    {
      name: "13.09",
      Euro: 4.5222
    },
    {
      name: "12.09",
      Euro: 4.491
    },
    {
      name: "11.09",
      Euro: 4.4775
    },
    {
      name: "10.09",
      Euro: 4.5063
    },
    {
      name: "09.09",
      Euro: 4.5226
    },
    {
      name: "06.09",
      Euro: 4.4766
    },
    {
      name: "05.09",
      Euro: 4.5319
    },
    {
      name: "04.09",
      Euro: 4.5182
    },
    {
      name: "03.09",
      Euro: 4.5726
    },
    {
      name: "02.09",
      Euro: 4.59
    },
    {
      name: "30.08",
      Euro: 4.5526
    },
    {
      name: "29.08",
      Euro: 4.6083
    },
    {
      name: "28.08",
      Euro: 4.6166
    },
    {
      name: "27.08",
      Euro: 4.5802
    },
    {
      name: "26.08",
      Euro: 4.6135
    },
    {
      name: "23.08",
      Euro: 4.5914
    },
    {
      name: "22.08",
      Euro: 4.5092
    },
    {
      name: "21.08",
      Euro: 4.4626
    },
    {
      name: "20.08",
      Euro: 4.4983
    },
    {
      name: "19.08",
      Euro: 4.5124
    },
    {
      name: "16.08",
      Euro: 4.4416
    },
    {
      name: "15.08",
      Euro: 4.4318
    },
    {
      name: "14.08",
      Euro: 4.5133
    },
    {
      name: "13.08",
      Euro: 4.4281
    },
    {
      name: "12.08",
      Euro: 4.4662
    },
    {
      name: "09.08",
      Euro: 4.4122
    },
    {
      name: "08.08",
      Euro: 4.381
    },
    {
      name: "07.08",
      Euro: 4.4432
    },
    {
      name: "06.08",
      Euro: 4.4347
    },
    {
      name: "05.08",
      Euro: 4.4545
    },
    {
      name: "02.08",
      Euro: 4.3187
    },
    {
      name: "01.08",
      Euro: 4.2544
    },
    {
      name: "31.07",
      Euro: 4.2236
    },
    {
      name: "30.07",
      Euro: 4.2265
    },
    {
      name: "29.07",
      Euro: 4.2131
    },
    {
      name: "26.07",
      Euro: 4.2
    },
    {
      name: "25.07",
      Euro: 4.2126
    },
    {
      name: "24.07",
      Euro: 4.2027
    },
    {
      name: "23.07",
      Euro: 4.2075
    },
    {
      name: "22.07",
      Euro: 4.1921
    },
    {
      name: "19.07",
      Euro: 4.2054
    },
    {
      name: "18.07",
      Euro: 4.1928
    },
    {
      name: "17.07",
      Euro: 4.2236
    },
    {
      name: "16.07",
      Euro: 4.2236
    },
    {
      name: "15.07",
      Euro: 4.2276
    },
    {
      name: "12.07",
      Euro: 4.2099
    },
    {
      name: "11.07",
      Euro: 4.224
    },
    {
      name: "10.07",
      Euro: 4.2232
    },
    {
      name: "09.07",
      Euro: 4.2583
    },
    {
      name: "08.07",
      Euro: 4.2676
    },
    {
      name: "05.07",
      Euro: 4.2889
    },
    {
      name: "04.07",
      Euro: 4.2888
    },
    {
      name: "03.07",
      Euro: 4.3144
    },
    {
      name: "02.07",
      Euro: 4.3408
    },
    {
      name: "01.07",
      Euro: 4.3336
    },
    {
      name: "28.06",
      Euro: 4.376
    },
    {
      name: "27.06",
      Euro: 4.3415
    },
    {
      name: "26.06",
      Euro: 4.3691
    },
    {
      name: "25.06",
      Euro: 4.3723
    },
    {
      name: "24.06",
      Euro: 4.3595
    },
    {
      name: "21.06",
      Euro: 4.3399
    },
    {
      name: "20.06",
      Euro: 4.3342
    },
    {
      name: "19.06",
      Euro: 4.3084
    },
    {
      name: "18.06",
      Euro: 4.3198
    },
    {
      name: "17.06",
      Euro: 4.3613
    },
    {
      name: "14.06",
      Euro: 4.3664
    },
    {
      name: "13.06",
      Euro: 4.3392
    },
    {
      name: "12.06",
      Euro: 4.3634
    },
    {
      name: "11.06",
      Euro: 4.3695
    },
    {
      name: "10.06",
      Euro: 4.3967
    },
    {
      name: "07.06",
      Euro: 4.3935
    },
    {
      name: "06.06",
      Euro: 4.3737
    },
    {
      name: "05.06",
      Euro: 4.3539
    },
    {
      name: "04.06",
      Euro: 4.3364
    },
    {
      name: "03.06",
      Euro: 4.3669
    },
    {
      name: "31.05",
      Euro: 4.385
    },
    {
      name: "30.05",
      Euro: 4.4315
    },
    {
      name: "29.05",
      Euro: 4.4229
    },
    {
      name: "28.05",
      Euro: 4.4911
    },
    {
      name: "27.05",
      Euro: 4.5243
    },
    {
      name: "24.05",
      Euro: 4.5047
    },
    {
      name: "23.05",
      Euro: 4.516
    },
    {
      name: "22.05",
      Euro: 4.5054
    },
    {
      name: "21.05",
      Euro: 4.5064
    },
    {
      name: "20.05",
      Euro: 4.5747
    },
    {
      name: "17.05",
      Euro: 4.574
    },
    {
      name: "16.05",
      Euro: 4.521
    },
    {
      name: "15.05",
      Euro: 4.4813
    },
    {
      name: "14.05",
      Euro: 4.4565
    },
    {
      name: "13.05",
      Euro: 4.4808
    },
    {
      name: "10.05",
      Euro: 4.4444
    },
    {
      name: "09.05",
      Euro: 4.4254
    },
    {
      name: "08.05",
      Euro: 4.3957
    },
    {
      name: "07.05",
      Euro: 4.4424
    },
    {
      name: "06.05",
      Euro: 4.444
    },
    {
      name: "03.05",
      Euro: 4.4103
    },
    {
      name: "02.05",
      Euro: 4.4316
    },
    {
      name: "01.05",
      Euro: 4.3875
    },
    {
      name: "30.04",
      Euro: 4.3964
    },
    {
      name: "29.04",
      Euro: 4.4085
    },
    {
      name: "26.04",
      Euro: 4.3798
    },
    {
      name: "25.04",
      Euro: 4.3997
    },
    {
      name: "24.04",
      Euro: 4.4521
    },
    {
      name: "23.04",
      Euro: 4.4003
    },
    {
      name: "22.04",
      Euro: 4.4304
    },
    {
      name: "19.04",
      Euro: 4.4152
    },
    {
      name: "18.04",
      Euro: 4.4086
    },
    {
      name: "17.04",
      Euro: 4.4468
    },
    {
      name: "16.04",
      Euro: 4.4027
    },
    {
      name: "15.04",
      Euro: 4.3781
    },
    {
      name: "12.04",
      Euro: 4.3858
    },
    {
      name: "11.04",
      Euro: 4.3391
    },
    {
      name: "10.04",
      Euro: 4.3116
    },
    {
      name: "09.04",
      Euro: 4.336
    },
    {
      name: "08.04",
      Euro: 4.3336
    },
    {
      name: "05.04",
      Euro: 4.3432
    },
    {
      name: "04.04",
      Euro: 4.3295
    },
    {
      name: "03.04",
      Euro: 4.3469
    },
    {
      name: "02.04",
      Euro: 4.3167
    },
    {
      name: "01.04",
      Euro: 4.3182
    },
    {
      name: "29.03",
      Euro: 4.4013
    },
    {
      name: "28.03",
      Euro: 4.3792
    },
    {
      name: "27.03",
      Euro: 4.489
    },
    {
      name: "26.03",
      Euro: 4.3669
    },
    {
      name: "25.03",
      Euro: 4.3587
    },
    {
      name: "22.03",
      Euro: 4.417
    },
    {
      name: "21.03",
      Euro: 4.3124
    },
    {
      name: "20.03",
      Euro: 4.3083
    },
    {
      name: "19.03",
      Euro: 4.2996
    },
    {
      name: "18.03",
      Euro: 4.2978
    },
    {
      name: "15.03",
      Euro: 4.3177
    },
    {
      name: "14.03",
      Euro: 4.3425
    },
    {
      name: "13.03",
      Euro: 4.3182
    },
    {
      name: "12.03",
      Euro: 4.3022
    },
    {
      name: "11.03",
      Euro: 4.3185
    },
    {
      name: "08.03",
      Euro: 4.3465
    },
    {
      name: "07.03",
      Euro: 4.3324
    },
    {
      name: "06.03",
      Euro: 4.3419
    },
    {
      name: "05.03",
      Euro: 4.2694
    },
    {
      name: "04.03",
      Euro: 4.2812
    },
    {
      name: "01.03",
      Euro: 4.2948
    },
    {
      name: "28.02",
      Euro: 4.2657
    },
    {
      name: "27.02",
      Euro: 4.2393
    },
    {
      name: "26.02",
      Euro: 4.2729
    },
    {
      name: "25.02",
      Euro: 4.2621
    },
    {
      name: "22.02",
      Euro: 4.252
    },
    {
      name: "21.02",
      Euro: 4.2732
    },
    {
      name: "20.02",
      Euro: 4.226
    },
    {
      name: "19.02",
      Euro: 4.2223
    },
    {
      name: "18.02",
      Euro: 4.2249
    },
    {
      name: "15.02",
      Euro: 4.1797
    },
    {
      name: "14.02",
      Euro: 4.2057
    },
    {
      name: "13.02",
      Euro: 4.2278
    },
    {
      name: "12.02",
      Euro: 4.2016
    },
    {
      name: "11.02",
      Euro: 4.2372
    },
    {
      name: "08.02",
      Euro: 4.2254
    },
    {
      name: "07.02",
      Euro: 4.2172
    },
    {
      name: "06.02",
      Euro: 4.202
    },
    {
      name: "05.02",
      Euro: 4.189
    },
    {
      name: "04.02",
      Euro: 4.1968
    },
    {
      name: "01.02",
      Euro: 4.1925
    },
    {
      name: "31.01",
      Euro: 4.1713
    },
    {
      name: "30.01",
      Euro: 4.2298
    },
    {
      name: "29.01",
      Euro: 4.253
    },
    {
      name: "28.01",
      Euro: 4.2987
    },
    {
      name: "25.01",
      Euro: 4.3013
    },
    {
      name: "24.01",
      Euro: 4.2661
    },
    {
      name: "23.01",
      Euro: 4.2864
    },
    {
      name: "22.01",
      Euro: 4.3337
    },
    {
      name: "21.01",
      Euro: 4.2682
    },
    {
      name: "18.01",
      Euro: 4.263
    },
    {
      name: "17.01",
      Euro: 4.2735
    },
    {
      name: "16.01",
      Euro: 4.2595
    },
    {
      name: "15.01",
      Euro: 4.2425
    },
    {
      name: "14.01",
      Euro: 4.2453
    },
    {
      name: "11.01",
      Euro: 4.2565
    },
    {
      name: "10.01",
      Euro: 4.2671
    },
    {
      name: "09.01",
      Euro: 4.2482
    },
    {
      name: "08.01",
      Euro: 4.2488
    },
    {
      name: "07.01",
      Euro: 4.2868
    },
    {
      name: "04.01",
      Euro: 4.2339
    },
    {
      name: "03.01",
      Euro: 4.2801
    },
    {
      name: "02.01",
      Euro: 4.2992
    },
    {
      name: "01.01",
      Euro: 4.4494
    }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        width={500}
        height={300}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Euro" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export const renderPricePerDieselChart = () => {
  const data = [
    {
      name: "JAN",
      Centro_Oeste: 3.696,
      Nordeste: 3.665,
      Norte: 3.843,
      Sudeste: 3.486,
      Sul: 3.379
    },
    {
      name: "FEV",
      Centro_Oeste: 3.709,
      Nordeste: 3.663,
      Norte: 3.839,
      Sudeste: 3.511,
      Sul: 3.39
    },
    {
      name: "MAR",
      Centro_Oeste: 3.789,
      Nordeste: 3.734,
      Norte: 3.943,
      Sudeste: 3.621,
      Sul: 3.501
    },
    {
      name: "ABR",
      Centro_Oeste: 3.812,
      Nordeste: 3.759,
      Norte: 3.943,
      Sudeste: 3.601,
      Sul: 3.501
    },
    {
      name: "MAIO",
      Centro_Oeste: 3.888,
      Nordeste: 3.833,
      Norte: 4.027,
      Sudeste: 3.621,
      Sul: 3.512
    },
    {
      name: "JUN",
      Centro_Oeste: 3.835,
      Nordeste: 3.833,
      Norte: 4.027,
      Sudeste: 3.635,
      Sul: 3.512
    },
    {
      name: "JUL",
      Centro_Oeste: 3.81,
      Nordeste: 3.781,
      Norte: 4.021,
      Sudeste: 3.603,
      Sul: 3.469
    },
    {
      name: "AGO",
      Centro_Oeste: 3.746,
      Nordeste: 3.708,
      Norte: 3.98,
      Sudeste: 3.57,
      Sul: 3.378
    },
    {
      name: "SET",
      Centro_Oeste: 3.846,
      Nordeste: 3.793,
      Norte: 3.98,
      Sudeste: 3.672,
      Sul: 3.5
    },
    {
      name: "OUT",
      Centro_Oeste: 3.942,
      Nordeste: 3.885,
      Norte: 4.158,
      Sudeste: 3.762,
      Sul: 3.589
    },
    {
      name: "NOV",
      Centro_Oeste: 3.952,
      Nordeste: 3.884,
      Norte: 4.184,
      Sudeste: 3.759,
      Sul: 3.572
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
          dataKey="Nordeste"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Centro_Oeste" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Norte" stroke="#e74c3c" />
        <Line type="monotone" dataKey="Sudeste" stroke="#f1c40f" />
        <Line type="monotone" dataKey="Sul" stroke="#7f8c8d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const renderTotalOfVehiclesByCompanyChart = () => {
  const data = [
    {
      name: "Gontuo",
      Veiculos: 966
    },
    {
      name: "Cometa",
      Veiculos: 541
    },
    {
      name: "Guanabara",
      Veiculos: 346
    },
    {
      name: "Águia Branca",
      Veiculos: 341
    },
    {
      name: "Auto Viação",
      Veiculos: 286
    },
    {
      name: "Auto Viação Cata",
      Veiculos: 277
    },
    {
      name: "Viação Garcia",
      Veiculos: 249
    }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        layout="vertical"
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" scale="band" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Veiculos" barSize={20} fill="#413ea0" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export const renderMarketByCompanyChart = () => {
  const data = [
    {
      name: "Unesul",
      Mercado_Por_Empresa: 4340
    },
    {
      name: "Viação Ouro e Prata S/A",
      Mercado_Por_Empresa: 3429
    },
    {
      name: "Gontijo",
      Mercado_Por_Empresa: 1767
    },
    {
      name: "R.A de Sousa",
      Mercado_Por_Empresa: 1383
    },
    {
      name: "Lopestur Lopes",
      Mercado_Por_Empresa: 1277
    },
    {
      name: "Expresso",
      Mercado_Por_Empresa: 1272
    },
    {
      name: "Real Maia",
      Mercado_Por_Empresa: 1141
    },
    {
      name: "Lopes e Oliveira",
      Mercado_Por_Empresa: 1112
    },
    {
      name: "Expresso Guanabara",
      Mercado_Por_Empresa: 1049
    }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        layout="vertical"
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" scale="band" />
        <Tooltip />
        <Legend />

        <Bar dataKey="Mercado_Por_Empresa" barSize={20} fill="#34ace0" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export const renderNumberOfPassengersChart = () => {
  const data = [
    {
      name: "JAN",
      Turismo: 4509163
    },
    {
      name: "FEV",
      Turismo: 3309577
    },
    {
      name: "MAR",
      Turismo: 3178757
    },
    {
      name: "ABR",
      Turismo: 3041866
    },
    {
      name: "MAI",
      Turismo: 3025757
    },
    {
      name: "JUN",
      Turismo: 3004654
    },
    {
      name: "JUL",
      Turismo: 3902595
    },
    {
      name: "AGO",
      Turismo: 3050980
    },
    {
      name: "SET",
      Turismo: 4643491
    },
    {
      name: "OUT",
      Turismo: 3195549
    },
    {
      name: "NOV",
      Turismo: 2992545
    },
    {
      name: "DEZ",
      Turismo: 4229660
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
        <Line type="monotone" dataKey="Turismo" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};
