import React from "react";
import NFT from "@/components/NFT/NFT";
import { useRouter } from "next/router";
import { getQuery } from "@/lib/services/services";
import { NFTProps } from "@/components/NFT/types";
import { DEFAULT_ADDRESS, DEFAULT_CHAIN } from "@/lib/constants/constants";

const NftPage = () => {
  const { asPath } = useRouter();
  const { chain, search, id } = getQuery(asPath) as NFTProps;

  return (
    <NFT
      chain={chain || DEFAULT_CHAIN}
      search={search || DEFAULT_ADDRESS}
      id={id || ""}
    />
  );
};

export default NftPage;
