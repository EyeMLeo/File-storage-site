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
import { FireBaseContext } from '../FireBaseContext/FireBaseContext';

// x Laikinas aprasymas
const StyledUploadTab = styled.div`
  padding: 30px;
  padding-bottom: 0;
  height: 100%;
`;

const StyledImg = styled.img`
  max-height: 90px;
  margin: 50px;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  text-align: center;
  text-align: -webkit-center;
`;

const HideFileInput = styled.input`
  display: none;
`;

const StyledBrowseLabel = styled.label`
  text-decoration: underline;
  cursor: pointer;
  padding-left: 0.5rem;
  color: #850c81;
  text-underline-offset: 4px;
`;

const StyledButton = styled(Button)`
  display: block;
  min-width: 200px;
  margin-top: 0.5rem;
  border: 1px black solid;
  color: 'primary.main';
`;

const StyledDropInstructions = styled.div`
  display: flex;
  justify-content: center;
`;

function UploadTab() {
  const [uploadFile, setUploadFile] = React.useState<FileList | File[] | null>(
    null
  );
  const [isDragging, setIsDragging] = React.useState(false);

  function uploadFileFn() {
    if (uploadFile === null) return;
    const fileRef = ref(storage, `${uploadFile[0].name}`);
    // console.log('uploadFile ===', uploadFile[0]);
    // console.log('Object values ===', Object.values(uploadFile[0]));
    uploadBytes(fileRef, uploadFile[0]).then(() => {
      alert('File uploaded');
      setUploadFile(null);
    });
  }

  function dragStartHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(true);
  }
  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
  }
  function onDropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    setUploadFile(files);
    uploadFileFn();
    setIsDragging(false);
  }

  const { displayNames, setDisplayNames, isLoading, setIsLoading }: any =
    React.useContext(FireBaseContext);

  const [acordionDisplay, SetAcordionDisplay] = React.useState(false);

  function SetAcordionDisplayHandler() {
    SetAcordionDisplay((prev) => !prev);
  }

  return (
    <StyledUploadTab>
      <Accordion
        sx={{ borderRadius: '16px' }}
        elevation={4}
        square={true}
        expanded={!displayNames[0] || acordionDisplay}
      >
        <AccordionSummary
          onClick={SetAcordionDisplayHandler}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Select more files for upload</Typography>
        </AccordionSummary>
        <StyledAccordionDetails
          sx={{ bgcolor: isDragging ? '#e0f2f1' : '' }}
          style={
            isDragging
              ? {
                  borderColor: 'teal',
                  boxSizing: 'border-box',
                  border: 'dashed 5px green',
                  borderRadius: '15px',
                }
              : {}
          }
          onDragStart={(e) => dragStartHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          onDrop={(e) => onDropHandler(e)}
        >
          {!isDragging && (
            <>
              {uploadFile && (
                <>
                  <h3>{`File name - ${uploadFile[0].name}`}</h3>
                  <StyledButton
                    sx={{ display: 'block', minWidth: '200px', mt: 1 }}
                    variant="contained"
                    onClick={uploadFileFn}
                  >
                    Confirm upload
                  </StyledButton>
                  <StyledButton
                    sx={{ display: 'block', minWidth: '200px', mt: 1 }}
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      setUploadFile(null);
                    }}
                  >
                    Cancel
                  </StyledButton>
                </>
              )}

              {!uploadFile && (
                <>
                  <h3>Select files</h3>
                  <StyledDropInstructions>
                    <p>Drop files here or click </p>
                    <StyledBrowseLabel htmlFor="file">
                      {' '}
                      browse
                    </StyledBrowseLabel>
                  </StyledDropInstructions>
                  <HideFileInput
                    type="file"
                    id="file"
                    onChange={(event) => {
                      setUploadFile(event.target.files);
                    }}
                  />
                </>
              )}
            </>
          )}
          {isDragging && <h3>Drop files here</h3>}
          <StyledImg
            src={
              // Terenary inside terenary
              isDragging
                ? '/IMG/arrow.png'
                : uploadFile
                ? '/IMG/check.png'
                : '/IMG/addfiles.jpg'
            }
            alt="Upload files"
          />
        </StyledAccordionDetails>
      </Accordion>
    </StyledUploadTab>
  );
}
export default UploadTab;
