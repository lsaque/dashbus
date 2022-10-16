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
import { PageTypes, usePageContext } from "../common";

// export const ASIDE_ITEMS_LIST = new Array<PageTypes>(
//   {
//     id: 0,
//     name: "General",
//     to: "general",
//     icon: <GridViewOutlined />
//   },
//   {
//     id: 1,
//     name: "Page 1",
//     to: "page-1",
//     icon: <TimelineOutlined />
//   },
//   {
//     id: 2,
//     name: "Page 2",
//     to: "page-2",
//     icon: <ArticleOutlined />
//   },
//   {
//     id: 3,
//     name: "New",
//     to: "new",
//     icon: <AddCircleOutline />
//   }
// );

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

  // const ASIDE_ITEMS = [
  //   {
  //     id: 0,
  //     name: "General",
  //     to: ROUTES.GENERAL,
  //     icon: <GridViewOutlined />
  //   },
  //   {
  //     id: 1,
  //     nam: "Page 1",
  //     to: ROUTES.PAGE1,
  //     icon: <TimelineOutlined />
  //   },
  //   {
  //     id: 2,
  //     name: "Page 2",
  //     to: ROUTES.PAGE2,
  //     icon: <ArticleOutlined />
  //   },
  //   {
  //     id: 3,
  //     to: ROUTES.NEW,
  //     icon: <AddCircleOutline />,
  //     onClick: () => {
  //       console.log("add");
  //     }
  //   }
  // ];

  // useEffect(() => {
  //   console.log(ASIDE_ITEMS_LIST);
  // }, [ASIDE_ITEMS_LIST]);

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
