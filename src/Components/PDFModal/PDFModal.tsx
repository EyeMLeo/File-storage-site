import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Paper from '@mui/material/Paper';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PreviewIcon from '@mui/icons-material/Preview';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

interface PDFModalProps {
  displayHandler: any;
  display: boolean;
  handleClose: any;
}

const StyledModalBox = styled.div`
  padding: 30px;
  /* overflow: hidden; */
`;
const StyledPDFBox = styled.div`
  /* padding: 30px; */
`;

const StyledFileNav = styled.div`
  display: inline-block;
  width: 100%;
  padding-bottom: 1rem;
  padding-top: 0.5rem;
  text-align: -webkit-center;
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

function PDFModal(props: PDFModalProps) {
  return (
    <div>
      <Dialog
        // onClick={handleClose}
        sx={{
          '& .MuiDialog-container': {
            '& .MuiPaper-root': {
              width: '100%',
              maxWidth: '600px',
              borderRadius: '25px',
            },
          },
        }}
        open={props.display}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <StyledModalBox>
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
          </StyledFileNav>
          <DialogContentText
            sx={{
              color: 'text.secondary',
              fontWeight: '500',
              fontSize: 18,
              mb: 2,
            }}
            id="alert-dialog-description"
          >
            <StyledPDFBox>
              <img src="/IMG/A4.png" alt="blank A4 image" />
              <img src="/IMG/A4.png" alt="blank A4 image" />
              <img src="/IMG/A4.png" alt="blank A4 image" />
              <img src="/IMG/A4.png" alt="blank A4 image" />
              <img src="/IMG/A4.png" alt="blank A4 image" />
            </StyledPDFBox>
          </DialogContentText>
        </StyledModalBox>
      </Dialog>
    </div>
  );
}
export default PDFModal;
