import React, { useEffect } from "react";
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
  DirectionsBusOutlined,
  AddCircleOutlineOutlined,
  AddCircle,
  MultilineChartOutlined,
  AddCircleOutlineTwoTone,
  AddCircleOutline
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
import { usePageContext } from "../common";

export const LayoutComponent: React.FC = () => {
  const { pages } = usePageContext();

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
                {pages.map(({ id, icon, to, ...rest }) => (
                  <NavLink to={to} tabIndex={-1} key={id}>
                    {({ isActive }) => (
                      <AsideItemComponent isActive={isActive} {...rest}>
                        {icon}
                      </AsideItemComponent>
                    )}
                  </NavLink>
                ))}
                <NavLink to={ROUTES.NEW} tabIndex={-1}>
                  {({ isActive }) => (
                    <AsideItemComponent isActive={isActive}>
                      <AddCircleOutline />
                    </AsideItemComponent>
                  )}
                </NavLink>
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
