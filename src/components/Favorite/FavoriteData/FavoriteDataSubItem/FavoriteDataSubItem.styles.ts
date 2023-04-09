import { styled } from "@mui/material";
import Link from "next/link";
import { COLORS, PRIMARY_MAIN_COLOR } from "../../../../theme/colors";

const LinkSC = styled(Link)`
  display: block;
  overflow: hidden;
  position: relative;

  background-color: ${COLORS.MAIN};
  border: 1px solid white;

  margin-bottom: 10px;
  border-radius: 10px;

  transition: 0.2s all linear;
  &:hover {
    border: 1px solid ${PRIMARY_MAIN_COLOR};
  }
`;

const ImageContainerSC = styled("div")`\
  width: 100%;
  height: 100%;
  max-height: 150px;
  flex-shrink: 0;
  
  background-color: ${COLORS.SECONDARY};

  & > img {
    width: inherit;
    min-height: auto;
    max-height: inherit;
    
    border-radius: 0;
    object-fit: contain;
  }
`;

const TextSC = styled("div")`
  display: block;
  color: ${PRIMARY_MAIN_COLOR};
  padding: 10px;

  font-size: 14px;
  text-transform: uppercase;
  word-break: break-word;
`;

const TextItemSC = styled("div")`
  margin-bottom: 5px;

  & > span {
    color: ${COLORS.LIGHT};
  }
`;

export const useFavoriteDataSubItemStyles = () => ({
  LinkSC,
  ImageContainerSC,
  TextSC,
  TextItemSC,
});
