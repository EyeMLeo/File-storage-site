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
  const [uploadFile, setUploadFile] = React.useState<FileList | File[] | null>(
    null
  );
  // FileList | null
  // HTMLInputElement.files: FileList | null
  function uploadFileFn() {
    if (uploadFile === null) return;
    const fileRef = ref(storage, `${uploadFile[0].name}`);
    console.log('uploadFile ===', uploadFile[0]);
    console.log('Object values ===', Object.values(uploadFile[0]));

    uploadBytes(fileRef, uploadFile[0]).then(() => {
      alert('File uploaded');
    });
  }
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
          <input
            type="file"
            onChange={(event) => {
              // if (uploadFile === null) return;
              // else {
              setUploadFile(event.target.files);
              // }
            }}
          />
          <button onClick={uploadFileFn}>Upload</button>
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
