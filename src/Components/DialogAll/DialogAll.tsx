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

interface DialogAllProps {
  actionToProceed: Function;
  displayHandler: any;
  display: boolean;
  text: string;
}

const StyledModalBox = styled.div`
  padding: 30px 15px 10px 25px;
  overflow: hidden;
`;

function DialogAll(props: DialogAllProps) {
  const [open, setOpen] = React.useState(props.display);
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
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
        onClose={props.displayHandler}
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
            {props.text}
          </DialogContentText>
          <DialogActions>
            <Button
              sx={{ px: 3, mr: 1.5 }}
              color="secondary"
              variant="outlined"
              onClick={props.displayHandler}
            >
              Cancel
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                props.actionToProceed();
                props.displayHandler();
              }}
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
