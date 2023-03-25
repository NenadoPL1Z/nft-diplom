import React from "react";
import { useAccount } from "@/hooks/pages/useAccount";

const Account = () => {
  const { isAuth, isLoading } = useAccount();
  return <section>account</section>;
};

export default Account;
