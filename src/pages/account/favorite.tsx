import React from "react";
import AccountWrapper from "@/components/Wrappers/AccountWrapper/AccountWrapper";
import { useFavorite } from "@/hooks/pages/useFavorite";

const Favorite = () => {
  const {} = useFavorite();

  return (
    <AccountWrapper title="Избранные">
      <h1>ok</h1>
    </AccountWrapper>
  );
};

export default React.memo(Favorite);
