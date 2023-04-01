import { styled } from "@mui/material";

const ContainerSC = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin-bottom: 40px;
  gap: 15px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
`;

export const useNFTDataStyles = () => ({
  ContainerSC,
});
