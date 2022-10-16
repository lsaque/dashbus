import React from "react";
import {
  Button,
  CardContent,
  CardHeader,
  Divider,
  Paper,
  TextField
} from "@mui/material";

import {
  CardComponent,
  CardContentComponent,
  CardFooterComponent,
  CardHeaderComponent
} from "../../common";

import { NewStyles } from "./New.styles";

export const NewPage: React.FC = () => {
  return (
    <NewStyles>
      <CardComponent
      // sx={{
      //   paddingTop: "8px",
      //   display: "flex",
      //   flexDirection: "column",
      //   height: "100%",
      //   gap: "16px"
      // }}
      >
        <CardHeaderComponent title="Nova Página de estatísticas" />
        <Divider />
        <CardContentComponent>
          <TextField variant="filled" label="Outlined" fullWidth />
          <TextField variant="filled" label="Outlined" fullWidth />
          <TextField variant="filled" label="Outlined" fullWidth />
          <TextField variant="filled" label="Outlined" fullWidth />
          <TextField variant="filled" label="Outlined" fullWidth />
        </CardContentComponent>
        <CardFooterComponent>
          <Button>eita nobru</Button>
        </CardFooterComponent>
      </CardComponent>
    </NewStyles>
  );
};
