import React, { useId } from "react";
import { Container, IconButton, Paper, Stack } from "@mui/material";
import {
  SearchOutlined,
  NotificationsNoneOutlined,
  Person2Outlined,
  LogoutOutlined,
  ArticleOutlined,
  DataSaverOnOutlined,
  GridViewOutlined,
  QueryStatsOutlined,
  StackedBarChartOutlined,
  ExitToAppOutlined,
  TimelineOutlined,
  AccountCircle
} from "@mui/icons-material";
import { Outlet } from "react-router-dom";

import {
  LayoutStyles,
  HeaderStyles,
  MainStyles,
  ContentStyles,
  AsideStyles
} from "./Layout.styles";

export const LayoutComponent: React.FC = () => {
  const id = useId();

  const HEADER_ITEMS = [
    {
      id,
      name: "search",
      icon: <SearchOutlined />
    },
    {
      id,
      name: "notification",
      icon: <NotificationsNoneOutlined />
    },
    {
      id,
      name: "profile",
      icon: <Person2Outlined />
    }
  ];

  const ASIDE_ITEMS = [
    {
      id,
      name: "??",
      icon: <GridViewOutlined />
    },
    {
      id,
      name: "??",
      icon: <TimelineOutlined />
    },
    {
      id,
      name: "??",
      icon: <ArticleOutlined />
    },
    {
      id,
      name: "??",
      icon: <QueryStatsOutlined />
    },
    {
      id,
      name: "??",
      icon: <StackedBarChartOutlined />
    },
    {
      id,
      name: "??",
      icon: <DataSaverOnOutlined />
    }
  ];

  return (
    <LayoutStyles>
      <Stack component={Container} spacing={2}>
        <HeaderStyles>
          <span>Dashbus</span>
          <menu>
            {HEADER_ITEMS.map(({ id, icon }) => (
              <IconButton key={id}>{icon}</IconButton>
            ))}
          </menu>
        </HeaderStyles>
        <Stack spacing={2} direction="row">
          <AsideStyles>
            <header>
              <IconButton disableRipple color="primary">
                <AccountCircle fontSize="large" />
              </IconButton>
            </header>
            <menu>
              {ASIDE_ITEMS.map(({ id, icon }) => (
                <IconButton key={id}>{icon}</IconButton>
              ))}
            </menu>
            <footer>
              <IconButton>
                <ExitToAppOutlined />
              </IconButton>
            </footer>
          </AsideStyles>
          <MainStyles>
            <Outlet />
          </MainStyles>
        </Stack>
      </Stack>
    </LayoutStyles>
  );
};
