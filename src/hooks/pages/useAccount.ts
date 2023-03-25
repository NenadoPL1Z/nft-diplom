import { usePrivatePage } from "@/hooks/usePrivatePage";

export const useAccount = () => {
  const { isLoading } = usePrivatePage();
  return {
    isLoading,
  };
};
