import React, { useId } from "react";
import {
  Button,
  CardContent,
  CardHeader,
  Divider,
  Paper,
  TextField
} from "@mui/material";
import { AbcOutlined } from "@mui/icons-material";

import {
  CardComponent,
  CardContentComponent,
  CardFooterComponent,
  CardHeaderComponent,
  PageTypes,
  usePageContext
} from "../../common";

import { NewStyles } from "./New.styles";

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
