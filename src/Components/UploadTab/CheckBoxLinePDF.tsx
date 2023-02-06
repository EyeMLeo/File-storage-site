import React from 'react';
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import styled from 'styled-components';
import { Box } from '@mui/system';

const StyledCheckBoxLine = styled(Box)`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 1rem;
`;

const StyledInputLabel = styled(InputLabel)`
  background-color: white;
  padding-right: 10px;
  translate: 0 -40%;
`;

function CheckBoxLinePDF() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const [changeOtherFile, setChangeOtherFile] = React.useState('');

  const handleChangeOtherFile = (event: SelectChangeEvent) => {
    setChangeOtherFile(event.target.value);
  };

  return (
    <StyledCheckBoxLine sx={{ pb: 0, pl: 0 }}>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
      <FormControl sx={{ width: '100%', height: '35px' }}>
        <StyledInputLabel id="demo-simple-select-label">PDF</StyledInputLabel>
        <Select
          sx={{
            boxShadow: 3,
            borderRadius: '10px',
            border: 0,
            overflow: 'hidden',
          }}
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={changeOtherFile}
          label="Other"
          onChange={handleChangeOtherFile}
        >
          <MenuItem value="PDF">PDF</MenuItem>
        </Select>
      </FormControl>
    </StyledCheckBoxLine>
  );
}
export default CheckBoxLinePDF;
