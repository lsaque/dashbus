import React, { Dispatch, Key, SetStateAction } from "react";

export type CategoryTypes = {
  id: number;
  name: string;
};

export type ChartTypes = {
  name: string | null;
  element: JSX.Element | null;
  category?: CategoryTypes;
  gridArea: "a" | "b" | "c" | "d";
  id: string;
};

export type PageTypes = {
  id: number;
  name: string;
  to: string;
  icon: JSX.Element;
  charts?: ChartTypes[];
};

export interface PageContextTypes {
  pages: PageTypes[];
  setPages: Dispatch<SetStateAction<PageTypes[]>>;
  updatePageChart: (
    pageId: number,
    dropAreaId: string,
    newElement: JSX.Element,
    newTitle: string
  ) => void;
  removePageChart: (pageId: number, dropAreaId: string) => void;
}
