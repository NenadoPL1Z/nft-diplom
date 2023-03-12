import React, { useEffect } from "react";
import PageContainerSC from "@/UI/SC/PageContainerSC";

import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const runApp = async () => {
  await Moralis.start({
    apiKey: "UdAH6DXhfV7PQJpeKDEj4P0IHtW8KhC2MojHawptirvpbM10ZQbJs4s9yAs8460f",
    // ...and any other configuration
  });

  const address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getContractNFTs({
    address,
    chain,
  });

  return response.toJSON();
};

const Nft = () => {
  useEffect(() => {
    runApp().then((r) => {
      console.log(r);
    });
  }, []);
  return <PageContainerSC>Nft</PageContainerSC>;
};

export default Nft;
