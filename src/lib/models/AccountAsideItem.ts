import { PagesNamespace } from "@/types/enum";
import { FC } from "react";

export type AccountAsideItemModel = {
  title: string;
  url: PagesNamespace;
  Icon: FC;
};
