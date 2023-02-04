import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Paper from '@mui/material/Paper';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';

const styleForModal = {
  pt: 3,
  pl: 2,
  pr: 2,
  pb: 1,
  borderRadius: '50px',
  overflow: 'hidden',
};

const StyledModalBox = styled.div`
  padding: 25px 15px 10px 25px;
  overflow: hidden;
`;

const StyledDialogContentText = styled(DialogContentText)`
  font-weight: bold;
`;

function DialogAll() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        sx={{
          '& .MuiDialog-container': {
            '& .MuiPaper-root': {
              width: '100%',
              maxWidth: '500px',
              borderRadius: '25px',
            },
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <StyledModalBox>
          <StyledDialogContentText id="alert-dialog-description">
            Are you sure you want to delete all files? You'll haveto start
            uploading process fromthe very beginning.
          </StyledDialogContentText>
          <DialogActions>
            <Button color="secondary" variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleClose}
              autoFocus
            >
              Confirm
            </Button>
          </DialogActions>
        </StyledModalBox>
      </Dialog>
    </div>
  );
}
export default DialogAll;
