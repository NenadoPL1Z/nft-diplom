import { AccountAsideItemModel } from "@/lib/models/AccountAsideItem";
import HistoryIcon from "@mui/icons-material/History";
import StarIcon from "@mui/icons-material/Star";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
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
    title: "Избранные поиски",
    url: PagesNamespace.FAVORITE,
    Icon: StarIcon,
  },
  {
    title: "Биржа",
    url: PagesNamespace.EXCHANGE,
    Icon: CurrencyExchangeIcon,
  },
  {
    title: "Выход из аккаунта",
    url: PagesNamespace.LOGOUT,
    Icon: LogoutIcon,
  },
];
