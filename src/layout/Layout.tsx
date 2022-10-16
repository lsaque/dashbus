import React from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import {
  SearchOutlined,
  NotificationsNoneOutlined,
  Person2Outlined,
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
  AsideStyles,
  LogoStyles,
  DashboardStyles,
  ContentContainerStyles
} from "./Layout.styles";
import { AsideItemComponent, HeaderItemComponent } from "./components";
import { ROUTES } from "../routes";

export const LayoutComponent: React.FC = () => {
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
      to: ROUTES.PAGE1,
      icon: <TimelineOutlined />
    },
    {
      id: 2,
      to: ROUTES.PAGE2,
      icon: <ArticleOutlined />
    },
    {
      id: 3,
      to: ROUTES.PAGE3,
      icon: <QueryStatsOutlined />
    },
    {
      id: 4,
      to: ROUTES.PAGE4,
      icon: <StackedBarChartOutlined />
    },
    {
      id: 5,
      to: ROUTES.PAGE5,
      icon: <DataSaverOnOutlined />
    }
  ];

  return (
    <LayoutStyles>
      <DashboardStyles>
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

        <ContentContainerStyles>
          <AsideStyles>
            <Box overflow="auto">
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
            </Box>
            <footer>
              <IconButton>
                <ExitToAppOutlined />
              </IconButton>
            </footer>
          </AsideStyles>
          <MainStyles>
            <Outlet />
          </MainStyles>
        </ContentContainerStyles>
      </DashboardStyles>
    </LayoutStyles>
  );
};
