import { useState } from "react";

type StatusType = {
  isLoading: boolean;
  hasError: string;
};

export const useStatus = (props?: Partial<StatusType>) => {
  const [{ isLoading, hasError }, setStatus] = useState<StatusType>({
    isLoading: true,
    hasError: "",
    ...props,
  });

  const handleChangeStatus = (state: Partial<StatusType>) => {
    setStatus((prevState) => ({
      ...prevState,
      ...state,
    }));
  };

  return {
    isLoading,
    hasError,
    handleChangeStatus,
  };
};
