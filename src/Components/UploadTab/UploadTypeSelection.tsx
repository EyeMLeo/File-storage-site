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

const StyledPaper = styled(Paper)`
  display: grid;
  grid-template-columns: auto 1fr;
`;

function UploadTypeSelection() {
  return (
    <>
      <SharedPaperStyle heading="Type of document" height="180px">
        <CheckBoxLine />
        <CheckBoxLine />
      </SharedPaperStyle>
    </>
  );
}
export default UploadTypeSelection;
