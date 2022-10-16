import React, { Dispatch, Key, SetStateAction } from "react";

export type PageTypes = {
  id: Key;
  name: string;
  to: string;
  icon: JSX.Element;
};

export interface PageContextTypes {
  pages: PageTypes[];
  setPages: Dispatch<SetStateAction<PageTypes[]>>;
}
