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
import CheckBoxLine from './CheckBoxLine';
import SharedPaperStyle from './SharedPaperStyle';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function UploadTypeSelection() {
  const [value, setValue] = React.useState('pdfValue');

  const StyledPaper = styled(Paper)`
    display: grid;
    grid-template-columns: auto 1fr;
  `;

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
    <>
      <SharedPaperStyle heading="Type of document" height="180px">
        <CheckBoxLine />
        <CheckBoxLine />
      </SharedPaperStyle>
      <SharedPaperStyle heading="List of uploads"></SharedPaperStyle>
      <SharedPaperStyle heading="List of uploads">
        <h1>asd</h1>
      </SharedPaperStyle>
    </>
  );
}
export default UploadTypeSelection;
