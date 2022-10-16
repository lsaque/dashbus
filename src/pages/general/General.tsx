import { InfoOutlined } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Paper,
  Typography
} from "@mui/material";
import { Unstable_Grid2 as Grid } from "@mui/material";
import React from "react";
import { CardComponent, CardHeaderComponent } from "../../common";
import { GeneralStyles, GridLayoutStyles } from "./General.styles";

export const GeneralPage: React.FC = () => {
  return (
    <GeneralStyles>
      <GridLayoutStyles>
        <CardComponent gridArea="a">
          <CardHeaderComponent title="Vendas - ÔNIBUS" />
          <Divider />
          testes
        </CardComponent>
        <CardComponent gridArea="b">
          <CardHeaderComponent title="Projeção p/ Dezembro" />
          <Divider />
          teste
        </CardComponent>
        <CardComponent gridArea="c">
          <CardHeaderComponent title="Clientes" />
          <Divider />
          teste
        </CardComponent>
        <CardComponent gridArea="d">
          <CardHeaderComponent title="Renovação de frota (Clientes Scania)" />
          <Divider />
          teste
        </CardComponent>
        <CardComponent gridArea="e">
          <CardHeaderComponent title="Renovação Proconve" />
          <Divider />
          teste
        </CardComponent>
      </GridLayoutStyles>
    </GeneralStyles>
  );
};
