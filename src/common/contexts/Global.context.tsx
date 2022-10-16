import React, { PropsWithChildren } from "react";

import { PageContextProvider } from "./page/Page.context";

export const GlobalContextProvider: React.FC<PropsWithChildren> = ({
  children
}) => {
  return <PageContextProvider>{children}</PageContextProvider>;
};

export * from "./page/Page.context";
