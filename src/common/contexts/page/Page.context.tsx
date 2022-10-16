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
  PropsWithChildren
} from "react";

import { PageContextTypes, PageTypes } from "./Page.context.types";

export const PageContext = createContext({} as PageContextTypes);

export const usePageContext = () => useContext(PageContext);

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
    icon: <AbcOutlined />
  }
];

export const PageContextProvider: React.FC<PropsWithChildren> = ({
  children
}) => {
  const [pages, setPages] = useState<PageTypes[]>(DEFAULT_GENERATED_PAGES);

  const value = useMemo(
    () => ({
      pages,
      setPages
    }),
    [pages]
  );

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export * from "./Page.context.types";
