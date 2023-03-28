import { AccountAsideItemModel } from "@/lib/models/AccountAsideItem";
import HistoryIcon from "@mui/icons-material/History";
import StarIcon from "@mui/icons-material/Star";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";
import { PagesNamespace } from "@/types/enum";

export const accountAsideData: AccountAsideItemModel[] = [
  {
    title: "Общая информация",
    url: PagesNamespace.ACCOUNT,
    Icon: InfoIcon,
  },
  {
    title: "Итория поисков",
    url: PagesNamespace.HISTORY,
    Icon: HistoryIcon,
  },
  {
    title: "Избранные NFT ",
    url: PagesNamespace.FAVORITE,
    Icon: StarIcon,
  },
  {
    title: "Выход из аккаунта",
    url: PagesNamespace.LOGOUT,
    Icon: LogoutIcon,
  },
];
