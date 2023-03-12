import { useEffect } from "react";

const UserInit = () => {
  useEffect(() => {
    console.log("user init");
  }, []);

  return null;
};

export default UserInit;
