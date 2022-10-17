import React, { useState } from "react";
import {
  DeleteOutlined,
  DirectionsBus,
  InfoOutlined,
  Percent,
  RestartAlt
} from "@mui/icons-material";
import { CardContent, Divider, IconButton } from "@mui/material";
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
  usePageContext
} from "../../common";

import { HolidayStyles, GridLayoutStyles } from "./Holiday.styles";
import { render } from "react-dom";
import { useParams } from "react-router-dom";
import { ROUTES } from "../../routes";

export const HolidayPage: React.FC = () => {
  const { pages, removePageChart } = usePageContext();

  const curPage = pages.find((page) => page.to === ROUTES.HOLIDAY);
  const pageId = curPage?.id || -1;

  return (
    <HolidayStyles>
      <GridLayoutStyles>
        {curPage?.charts?.map(({ gridArea, element, name, id }) => (
          <CardComponent
            key={id}
            gridArea={gridArea}
            isDroppable={!Boolean(element)}
          >
            {Boolean(element) && (
              <>
                <CardHeaderComponent
                  title={name}
                  action={
                    <IconButton
                      aria-label="Deletar gráfico"
                      onClick={() => {
                        removePageChart(pageId, id);
                      }}
                    >
                      <DeleteOutlined />
                    </IconButton>
                  }
                />
                <CardContentComponent>{element}</CardContentComponent>
              </>
            )}
          </CardComponent>
        ))}
      </GridLayoutStyles>
    </HolidayStyles>
  );
};
