import {
  GridViewOutlined,
  TimelineOutlined,
  ArticleOutlined,
  AbcOutlined
} from "@mui/icons-material";
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  PropsWithChildren,
  useEffect
} from "react";
import { renderDefaultChart } from "../..";

import { PageContextTypes, PageTypes } from "./Page.context.types";

export const PageContext = createContext({} as PageContextTypes);

export const usePageContext = () => useContext(PageContext);

export const PageContextProvider: React.FC<PropsWithChildren> = ({
  children
}) => {
  const DEFAULT_GENERATED_PAGES: PageTypes[] = [
    {
      id: 0,
      name: "General",
      to: "general",
      icon: <GridViewOutlined />
    },
    {
      id: 1,
      name: "Page 1",
      to: "page-1",
      icon: <TimelineOutlined />
    },
    {
      id: 2,
      name: "Page 2",
      to: "page-2",
      icon: <ArticleOutlined />
    },
    {
      id: 3,
      name: "Custom",
      to: `custom/3`,
      icon: <AbcOutlined />,
      charts: [
        {
          element: renderDefaultChart(),
          name: "Gráfico padrão",
          gridArea: "a",
          id: "drop-card-a"
        },
        {
          element: null,
          name: null,
          gridArea: "b",
          id: "drop-card-b"
        },
        {
          element: null,
          name: null,
          gridArea: "c",
          id: "drop-card-c"
        },
        {
          element: null,
          name: null,
          gridArea: "d",
          id: "drop-card-d"
        }
      ]
    }
  ];

  const [pages, setPages] = useState<PageTypes[]>(DEFAULT_GENERATED_PAGES);

  const updatePageChart = (
    pageId: number,
    dropAreaId: string,
    newElement: JSX.Element,
    newTitle: string
  ) => {
    setPages((cur) => {
      const newState = cur.map((page) => {
        if (page.id === pageId) {
          const charts = page.charts?.map((chart) => {
            if (chart.id === dropAreaId) {
              return { ...chart, element: newElement, name: newTitle };
            }
            return chart;
          });
          return { ...page, charts };
        }
        return page;
      });
      return newState;
    });
  };

  const removePageChart = (pageId: number, dropAreaId: string) => {
    setPages((cur) => {
      const newState = cur.map((page) => {
        if (page.id === pageId) {
          const charts = page.charts?.map((chart) => {
            if (chart.id === dropAreaId) {
              return { ...chart, element: null, name: null };
            }
            return chart;
          });
          return { ...page, charts };
        }
        return page;
      });
      return newState;
    });
  };

  const value = useMemo(
    () => ({
      pages,
      setPages,
      updatePageChart,
      removePageChart
    }),
    [pages]
  );

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export * from "./Page.context.types";
