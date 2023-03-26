import React from "react";
import PageContainerSC from "@/UI/SC/PageContainerSC";
import { styled } from "@mui/material";
import Logo from "@/components/Logo/Logo";
import { COLORS } from "../../theme/colors";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <FooterSC>
      <PageContainerSC>
        <WrapperSC>
          <FooterLogoSC>
            <Logo />
          </FooterLogoSC>
          <IconContainerSC>
            <IconItemSC>
              <IconLinkSC
                href="https://t.me/w1wk1"
                rel="noreferrer"
                target="_blank">
                <TelegramIcon />
              </IconLinkSC>
            </IconItemSC>
            <IconItemSC>
              <IconLinkSC
                href="https://github.com/NenadoPL1Z"
                rel="noreferrer"
                target="_blank">
                <GitHubIcon />
              </IconLinkSC>
            </IconItemSC>
          </IconContainerSC>
          <ParagraphSC>Copyright © 2023</ParagraphSC>
        </WrapperSC>
      </PageContainerSC>
    </FooterSC>
  );
};

const FooterSC = styled("footer")`
  padding: 20px 0;
  background-color: ${COLORS.SECONDARY};
  border-top: 1px solid ${COLORS.LIGHT};
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

const IconContainerSC = styled("ul")`
  display: flex;
  margin-bottom: 10px;
  & > *:last-child {
    margin-right: 0;
  }
`;

const IconItemSC = styled("li")`
  margin-right: 10px;
  border-radius: 50%;
`;

const IconLinkSC = styled("a")`
  display: block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  & > svg {
    width: inherit;
    height: inherit;
  }
`;

const ParagraphSC = styled("p")`
  text-align: center;
  white-space: pre-wrap;
  color: ${COLORS.GRAY};
`;

export default Footer;
