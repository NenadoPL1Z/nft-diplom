import React from "react";
import { styled } from "@mui/material";
import AccordionUI from "@/UI/AccordionUI/AccordionUI";
import { FAQData } from "@/lib/constants/FAQ";

const FAQPage = () => {
  return (
    <ContainerSC>
      <WrapperSC>
        {FAQData.map(({ title, Children }) => (
          <ItemSC key={title}>
            <AccordionUI title={title}>
              <Children />
            </AccordionUI>
          </ItemSC>
        ))}
      </WrapperSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  padding: 20px 0;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const WrapperSC = styled("div")`
  & > *:last-child {
    margin-bottom: 0;
  }
`;

const ItemSC = styled("div")`
  margin-bottom: 20px;
`;

export default FAQPage;
