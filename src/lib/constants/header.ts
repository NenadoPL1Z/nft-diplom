import { IHeaderModel } from "@/lib/models/IHeaderModel";
import { PagesNamespace } from "@/types/enum";

export const headersData: IHeaderModel[] = [
  { id: 1, title: "Главная", href: PagesNamespace.INDEX },
  { id: 4, title: "Маркет", href: PagesNamespace.NFT },
  { id: 3, title: "Контакты", href: PagesNamespace.CONTACTS },
  { id: 2, title: "ЧАВО", href: PagesNamespace.ABOUT },
];
