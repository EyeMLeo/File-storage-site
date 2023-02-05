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
import { Document, Page } from 'react-pdf';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PreviewIcon from '@mui/icons-material/Preview';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PDFModal from '../PDFModal/PDFModal';

// x Laikinas aprasymas
const StyledUploadTab = styled.div`
  padding: 30px;
  height: 100%;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  text-align: center;
  text-align: -webkit-center;
`;

const StyledFileNav = styled.div`
  display: inline-block;
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 0.5rem;
`;
const StyledFileNav__Name = styled.div`
  display: inline-flex;
  place-content: center;
  place-items: center;
`;
const StyledFileNav__Tools = styled.div`
  display: inline-flex;
  float: right;
  /* place-content: end; */
  /* align-self: center; */
`;

function PDFReader() {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  const [openPDFMOodal, setOpenPDFMOodal] = React.useState(true);

  const handleClickOpen = () => {
    setOpenPDFMOodal(true);
  };

  const handleClose = () => {
    setOpenPDFMOodal(false);
  };

  return (
    <>
      <StyledUploadTab>
        <Accordion
          sx={{ borderRadius: '16px' }}
          elevation={4}
          square={true}
          expanded={true}
        >
          <StyledAccordionDetails>
            <div>
              <StyledFileNav>
                <StyledFileNav__Name>
                  <NavigateBeforeIcon sx={{ color: 'text.secondary' }} />
                  <Typography
                    sx={{ color: 'text.secondary', mx: 2, fontSize: '20px' }}
                  >
                    Name of the file.pdf
                  </Typography>
                  <NavigateNextIcon sx={{ color: 'text.secondary' }} />
                </StyledFileNav__Name>
                <StyledFileNav__Tools>
                  <PreviewIcon
                    onClick={handleClickOpen}
                    sx={{ color: 'text.secondary' }}
                  />
                  <FileDownloadIcon sx={{ color: 'text.secondary' }} />
                </StyledFileNav__Tools>
              </StyledFileNav>
              <img src="/IMG/A4.png" alt="blank A4 image" />
            </div>
            {/* TO BE CONTINUED WITH REACT-PDF... below */}
            {/* <div>
              <Document
                file="https://www.africau.edu/images/default/sample.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </div> */}
          </StyledAccordionDetails>
        </Accordion>
      </StyledUploadTab>
      <PDFModal
        display={openPDFMOodal}
        displayHandler={setOpenPDFMOodal}
        handleClose={handleClose}
      />
    </>
  );
}
export default PDFReader;
