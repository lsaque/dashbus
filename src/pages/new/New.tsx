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
  usePageContext
} from "../../common";

import { NewStyles } from "./New.styles";

export const NewPage: React.FC = () => {
  const handleSubmit = () => {};
  const { pages, setPages } = usePageContext();

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
              fullWidth
            />
            <TextField
              name="icon"
              variant="filled"
              label="Ícone"
              placeholder="Selecione o ícone da página"
              fullWidth
            />
            {/* <TextField
              variant="filled"
              label="Outlined"
              placeholder="Informe o nome da página"
              fullWidth
            />
            <TextField variant="filled" label="Outlined" fullWidth />
            <TextField variant="filled" label="Outlined" fullWidth /> */}
          </CardContentComponent>
          <CardFooterComponent>
            {/* <Button type="submit" variant="contained"> */}
            <Button
              variant="contained"
              onClick={() => {
                const id = pages.length + 1;
                setPages((cur) => [
                  ...cur,
                  {
                    icon: <AbcOutlined />,
                    id,
                    name: "eitaaaa",
                    to: `custom/${id}`
                  }
                ]);
              }}
            >
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
