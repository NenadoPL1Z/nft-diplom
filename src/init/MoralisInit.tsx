import React, { useEffect } from "react";
import Moralis from "moralis";
import { NFT_API_KEY } from "@/lib/constants/constants";
import { useAppDispatch } from "@/hooks/store/useStore";
import { changeMoralis } from "@/store/reducers/globalSlice/globalSlice";

const MoralisInit = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    Moralis.start({
      apiKey: NFT_API_KEY,
    }).then(() => {
      dispatch(changeMoralis());
    });
  }, []);

  return null;
};

export default React.memo(MoralisInit);
