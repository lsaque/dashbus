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
  BarChart
} from "recharts";

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
