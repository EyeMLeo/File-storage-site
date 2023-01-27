import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormGroup,
  Paper,
  Typography,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
  makeStyles,
} from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';
import CheckBoxLine from './UploadTab/CheckBoxLine';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function UploadTypeSelection() {
  const [value, setValue] = React.useState('pdfValue');

  const handleChangePDF = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [changeOtherFile, setChangeOtherFile] = React.useState('');

  const handleChangeOtherFile = (event: SelectChangeEvent) => {
    setChangeOtherFile(event.target.value);
  };

  const StyledFormControl = styled(FormControl)`
    /* min-width: 100%; */
    /* width: 100%; */
  `;

  return (
    <Paper
      sx={{ borderRadius: '16px', m: 4, p: 1 }}
      elevation={4}
      square={true}
    >
      <Typography>Type of document</Typography>
      <CheckBoxLine />
    </Paper>
  );
}
export default UploadTypeSelection;
