import PageContainerSC from "@/UI/SC/PageContainerSC";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { NFT_API_KEY } from "@/lib/constants/constants";
import { axiosProject } from "@/lib/http";

const Home = () => {
  return (
    <PageContainerSC>
      <h1>NFT Маркет</h1>
    </PageContainerSC>
  );
};

export default Home;
