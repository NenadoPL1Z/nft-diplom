import React, { useMemo, useState } from "react";
import { styled } from "@mui/material";
import { INftModel } from "@/lib/models/INftModel";

interface INFTItemImageProps {
  metadata: Pick<INftModel, "normalized_metadata">["normalized_metadata"];
}

const NFTItemImage = ({ metadata }: INFTItemImageProps) => {
  const [isError, setIsError] = useState<boolean>(false);

  const image = useMemo(() => {
    return metadata?.image?.includes("ipfs")
      ? `https://ipfs.io/ipfs/${metadata?.image?.split("ipfs://")[1]}`
      : metadata?.image;
  }, [metadata?.image]);

  return (
    <ImageSC
      onError={() => setIsError(true)}
      src={isError ? "/images/placeholder-image.webp" : image}
      alt={metadata?.name}
    />
  );
};

const ImageSC = styled("img")`
  object-fit: cover;
  width: 100%;
  height: 250px;
`;

export default React.memo(NFTItemImage);
