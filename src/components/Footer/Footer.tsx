import React from "react";
import PageContainerSC from "@/UI/SC/PageContainerSC";
import { styled } from "@mui/material";
import Logo from "@/components/Logo/Logo";

const Footer = () => {
  return (
    <FooterSC>
      <PageContainerSC>
        <WrapperSC>
          <FooterLogoSC>
            <Logo />
          </FooterLogoSC>
          <ParagraphSC>Copyright © 2023</ParagraphSC>
        </WrapperSC>
      </PageContainerSC>
    </FooterSC>
  );
};

const FooterSC = styled("footer")`
  padding: 20px 0;
  background-color: rgba(0, 0, 0, 0.3);
  border-top: 1px solid lightblue;
`;

const WrapperSC = styled("footer")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const FooterLogoSC = styled("div")`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const ParagraphSC = styled("p")`
  text-align: center;
  white-space: pre-wrap;
  color: gray;
  & > span {
    color: lightblue;
  }
`;

export default Footer;
