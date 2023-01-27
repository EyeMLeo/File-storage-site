import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// x Laikinas aprasymas
const StyledUploadTab = styled.div`
  padding: 30px;
  height: 100%;
`;

const StyledImg = styled.img`
  max-width: 150px;
  margin: 50px;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  text-align: center;
`;

function UploadTab() {
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
          <Typography>Select more files for upload</Typography>
        </AccordionSummary>
        <StyledAccordionDetails>
          <h3>Select files</h3>
          <p>
            drop files here or click <a href="">browse</a>
          </p>
          <StyledImg src="/IMG/addfiles.jpg" alt="Upload files" />
        </StyledAccordionDetails>
      </Accordion>
    </StyledUploadTab>
  );
}
export default UploadTab;
