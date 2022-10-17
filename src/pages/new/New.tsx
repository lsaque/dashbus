import React, { useId } from "react";
import {
  Button,
  CardContent,
  CardHeader,
  Divider,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import {
  AbcOutlined,
  AccountTreeOutlined,
  AddchartOutlined,
  DataUsageOutlined,
  DonutSmallOutlined,
  MultilineChartOutlined,
  NetworkPingOutlined,
  PieChartOutlined,
  SsidChartOutlined,
  StackedBarChartOutlined,
  TroubleshootOutlined,
  WaterfallChartOutlined
} from "@mui/icons-material";

import {
  CardComponent,
  CardContentComponent,
  CardFooterComponent,
  CardHeaderComponent,
  PageTypes,
  usePageContext
} from "../../common";

import { NewStyles } from "./New.styles";

const ICONS_LIST = [
  {
    id: 0,
    icon: <MultilineChartOutlined />
  },
  {
    id: 1,
    icon: <StackedBarChartOutlined />
  },
  {
    id: 2,
    icon: <PieChartOutlined />
  },
  {
    id: 3,
    icon: <DataUsageOutlined />
  },
  {
    id: 4,
    icon: <TroubleshootOutlined />
  },
  {
    id: 5,
    icon: <AddchartOutlined />
  },
  {
    id: 6,
    icon: <DonutSmallOutlined />
  },
  {
    id: 7,
    icon: <WaterfallChartOutlined />
  },
  {
    id: 8,
    icon: <SsidChartOutlined />
  },
  {
    id: 9,
    icon: <StackedBarChartOutlined />
  },
  {
    id: 10,
    icon: <NetworkPingOutlined />
  },
  {
    id: 10,
    icon: <AccountTreeOutlined />
  }
];

export const NewPage: React.FC = () => {
  const { pages, setPages } = usePageContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const name = String(data.get("name"));
    const icon = <AbcOutlined />;
    const id = pages.length + 1;
    const to = `custom/${id}`;

    const page: PageTypes = {
      icon,
      id,
      name,
      to,
      charts: [
        {
          element: null,
          name: null,
          gridArea: "a",
          id: "drop-card-a"
        },
        {
          element: null,
          name: null,
          gridArea: "b",
          id: "drop-card-b"
        },
        {
          element: null,
          name: null,
          gridArea: "c",
          id: "drop-card-c"
        },
        {
          element: null,
          name: null,
          gridArea: "d",
          id: "drop-card-d"
        }
      ]
    };

    if (page) {
      setPages((cur) => [...cur, page]);
    }
  };

  return (
    <NewStyles>
      <CardComponent>
        <CardHeaderComponent title="Nova Página de estatísticas" />
        <Divider />
        <form onSubmit={handleSubmit}>
          <CardContentComponent>
            <TextField
              name="name"
              variant="filled"
              label="Página"
              placeholder="Informe o nome da página"
              required
              fullWidth
            />
            {/* <Typography></Typography> */}
            <TextField
              name="icon"
              variant="filled"
              label="Ícone"
              placeholder="Selecione o ícone da página"
              fullWidth
            />
          </CardContentComponent>
          <CardFooterComponent>
            <Button variant="contained" type="submit">
              Criar página
            </Button>
            <Button type="submit" variant="outlined">
              Cancelar
            </Button>
          </CardFooterComponent>
        </form>
      </CardComponent>
    </NewStyles>
  );
};
