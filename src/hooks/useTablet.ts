import { useMediaQuery } from "@mui/material";

export const useBigTablet = () => useMediaQuery("(max-width: 1024px)");
export const useTablet = () => useMediaQuery("(max-width: 768px)");
export const useMobile = () => useMediaQuery("(max-width: 500px)");
