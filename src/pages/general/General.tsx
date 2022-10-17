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
  CUSTOMERS_MOCK_LIST,
  renderFleetRenewalData,
  renderProconveRenovationChart,
  usePageContext
} from "../../common";

import { GeneralStyles, GridLayoutStyles } from "./General.styles";
import {
  CategoryItemComponent,
  CustomerComponent
} from "../../common/data/components";
import { ROUTES } from "../../routes";

export const GeneralPage: React.FC = () => {
  const { pages, removePageChart } = usePageContext();

  const curPage = pages.find((page) => page.to === ROUTES.GENERAL);
  const pageId = curPage?.id || -1;

  return (
    <GeneralStyles>
      <GridLayoutStyles>
        {curPage?.charts?.map(({ gridArea, element, name, id }) => (
          <CardComponent key={id} gridArea={gridArea}>
            {Boolean(element) && (
              <>
                <CardHeaderComponent title={name} />
                <CardContentComponent>{element}</CardContentComponent>
              </>
            )}
          </CardComponent>
        ))}
      </GridLayoutStyles>
    </GeneralStyles>
  );
};
