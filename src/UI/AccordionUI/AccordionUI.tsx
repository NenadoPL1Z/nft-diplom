import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { COLORS } from "../../theme/colors";

type AccordionUIProps = AccordionProps & { title: string };

const AccordionUI = ({ title, ...otherProps }: AccordionUIProps) => {
  return (
    <Accordion {...otherProps}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="secondary" />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <CustomTitle>{title}</CustomTitle>
      </AccordionSummary>
      <AccordionDetails>{otherProps.children}</AccordionDetails>
    </Accordion>
  );
};

const CustomTitle = styled("h2")`
  color: ${COLORS.LIGHT};
  font-weight: 500;
  font-size: 24px;
`;

export default React.memo(AccordionUI);
