import { usePrivatePage } from "@/hooks/usePrivatePage";
import { useAppSelector } from "@/hooks/useStore";

export const useAccount = () => {
  const userData = useAppSelector((state) => state.userSlice.userData);
  const { isLoading } = usePrivatePage();
  return {
    userData,
    isLoading,
  };
};
