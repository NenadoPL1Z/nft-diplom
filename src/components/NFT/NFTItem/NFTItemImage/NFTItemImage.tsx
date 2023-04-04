import React, { useMemo, useState } from "react";
import { CircularProgress, styled } from "@mui/material";
import { INftModel } from "@/lib/models/INftModel";
import { getIpfsImage } from "@/lib/services/services";

interface INFTItemImageProps {
  metadata: Pick<INftModel, "normalized_metadata">["normalized_metadata"];
}

const NFTItemImage = ({ metadata }: INFTItemImageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const image = useMemo(
    () => getIpfsImage(metadata?.image || "") || metadata?.image,
    [metadata?.image],
  );

  return (
    <>
      {isLoading && (
        <LoadingSC>
          <CircularProgress />
        </LoadingSC>
      )}
      <ImageSC
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsError(true);
          setIsLoading(false);
        }}
        src={isError ? "/images/placeholder-image.webp" : image}
        alt={metadata?.name}
      />
    </>
  );
};

const LoadingSC = styled("div")`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 8px 8px 0 0;
`;

const ImageSC = styled("img")`
  object-fit: cover;
  width: 100%;
  height: 100%;
  min-height: 300px;
  border-radius: 0 8px 0 0;
  overflow: hidden;
`;

export default React.memo(NFTItemImage);
