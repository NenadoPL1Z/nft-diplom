import React, { useMemo } from "react";
import { styled } from "@mui/material";

type INFTItemImage = {
  name: string;
  image: string;
  description: string;
  attributes: string[];
};

interface INFTItemImageProps {
  metadata: string;
}

const NFTItemImage = ({ metadata }: INFTItemImageProps) => {
  const data: INFTItemImage = useMemo(
    () => JSON.parse(metadata || "{}"),
    [metadata],
  );

  return (
    <ImageSC
      src={"https://picsum.photos/200/300"}
      alt={data?.name}
    />
  );
};

const ImageSC = styled("img")`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 250px;
`;

export default React.memo(NFTItemImage);
