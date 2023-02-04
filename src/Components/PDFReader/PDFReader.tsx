import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { storage } from '../../Firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { Button } from '@mui/material';

// x Laikinas aprasymas
const StyledUploadTab = styled.div`
  padding: 30px;
  height: 100%;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  text-align: center;
  text-align: -webkit-center;
`;

function PDFReader() {
  return (
    <StyledUploadTab>
      <Accordion
        sx={{ borderRadius: '16px' }}
        elevation={4}
        square={true}
        expanded={true}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>PDF Reader</Typography>
        </AccordionSummary>
        <StyledAccordionDetails></StyledAccordionDetails>
      </Accordion>
    </StyledUploadTab>
  );
}
export default PDFReader;
