import { usePrivatePage } from "@/hooks/usePrivatePage";
import { useAppSelector } from "@/hooks/useStore";

export const useAccount = () => {
  usePrivatePage();
};
