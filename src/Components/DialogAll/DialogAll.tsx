import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Paper from '@mui/material/Paper';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';

const StyledModalBox = styled.div`
  padding: 30px 15px 10px 25px;
  overflow: hidden;
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
              maxWidth: '600px',
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
          <DialogContentText
            sx={{
              color: 'text.secondary',
              fontWeight: '500',
              fontSize: 18,
              mb: 2,
            }}
            id="alert-dialog-description"
          >
            Are you sure you want to delete all files? You'll have to start
            uploading process fromthe very beginning.
          </DialogContentText>
          <DialogActions>
            <Button
              sx={{ px: 3, mr: 1.5 }}
              color="secondary"
              variant="outlined"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleClose}
              autoFocus
              sx={{ px: 3 }}
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
