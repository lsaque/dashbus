import React, { useState } from "react";
import { Container, IconButton, Paper, Stack, Typography } from "@mui/material";
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
  AccountCircle,
  DirectionsBusOutlined
} from "@mui/icons-material";
import { NavLink, Outlet } from "react-router-dom";

import {
  LayoutStyles,
  HeaderStyles,
  MainStyles,
  ContentStyles,
  AsideStyles,
  LogoStyles
} from "./Layout.styles";
import { AsideItemComponent, HeaderItemComponent } from "./components";
import { ROUTES } from "../routes";

export const LayoutComponent: React.FC = () => {
  const [isAsideItemActive, setIsAsideItemActive] = useState(false);

  const HEADER_ITEMS = [
    {
      id: 0,
      name: "search",
      icon: <SearchOutlined />,
      disabled: true
    },
    {
      id: 1,
      name: "notification",
      icon: <NotificationsNoneOutlined />,
      badgeContent: "1",
      isActive: true
    },
    {
      id: 2,
      name: "profile",
      icon: <Person2Outlined />,
      disabled: true
    }
  ];

  const ASIDE_ITEMS = [
    {
      id: 0,
      to: ROUTES.GENERAL,
      icon: <GridViewOutlined />
    },
    {
      id: 1,
      to: "test1",
      icon: <TimelineOutlined />
    },
    {
      id: 2,
      to: "test2",
      icon: <ArticleOutlined />
    },
    {
      id: 3,
      to: "test3",
      icon: <QueryStatsOutlined />
    },
    {
      id: 4,
      to: "test4",
      icon: <StackedBarChartOutlined />
    },
    {
      id: 5,
      to: "SEILA2",
      icon: <DataSaverOnOutlined />
    }
  ];

  return (
    <LayoutStyles>
      <Stack component={Container} spacing={2}>
        <HeaderStyles>
          <LogoStyles>
            <DirectionsBusOutlined />
            <Typography fontWeight="bold">Dashbus</Typography>
          </LogoStyles>
          <menu>
            {HEADER_ITEMS.map(({ id, icon, ...rest }) => (
              <HeaderItemComponent key={id} {...rest}>
                {icon}
              </HeaderItemComponent>
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
              {ASIDE_ITEMS.map(({ id, icon, to }) => (
                <NavLink to={to} tabIndex={-1} key={id}>
                  {({ isActive }) => (
                    <AsideItemComponent isActive={isActive}>
                      {icon}
                    </AsideItemComponent>
                  )}
                </NavLink>
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
