import { useAppDispatch } from "@/hooks/useStore";
import { logoutUser } from "../../init/FirebaseInit";
import { useState } from "react";
import { logoutActionUser } from "@/store/reducers/userSlice/userSlice";

export const useLogout = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    setIsLoading(true);
    logoutUser()
      .then(() => {
        setIsLoading(false);
        dispatch(logoutActionUser());
      })
      .catch(() => {
        setIsLoading(false);
        dispatch(logoutActionUser());
        document.cookie = "";
        localStorage.clear();
        sessionStorage.clear();
      });
  };

  return {
    isLoading,
    handleLogout,
  };
};
