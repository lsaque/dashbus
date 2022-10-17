import React, { useState } from "react";
import { Button, Divider, TextField, Typography } from "@mui/material";
import {
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
import { SelectItemIconComponent } from "./components/selectItemIcon/SelectItemIcon";
import { useNavigate } from "react-router-dom";

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
    id: 11,
    icon: <AccountTreeOutlined />
  }
];

export const NewPage: React.FC = () => {
  const { pages, setPages } = usePageContext();
  const [selectedIcon, setSelectedIcon] = useState(ICONS_LIST[0]);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const name = String(data.get("name"));
    const icon = selectedIcon.icon;
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
            <Typography>Selecione um ícone para página</Typography>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {ICONS_LIST.map((icon) => (
                <SelectItemIconComponent
                  isSelected={icon.id === selectedIcon.id}
                  icon={icon}
                  type="button"
                  onClick={() => {
                    console.log("clicou");
                    setSelectedIcon(icon);
                  }}
                />
              ))}
            </div>
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
