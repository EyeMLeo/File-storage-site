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
      <FormControl sx={{ width: '100%' }}>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChangePDF}
        >
          <FormControlLabel value="pdfValue" control={<Radio />} label="PDF" />
          <FormControlLabel
            value="otherFormatValue"
            control={<Radio />}
            label={
              <StyledFormControl>
                <InputLabel id="demo-simple-select-label">Other</InputLabel>
                <Select
                  labelId="demo-simple-select-disabled-label"
                  id="demo-simple-select-disabled"
                  value={changeOtherFile}
                  label="Other"
                  onChange={handleChangeOtherFile}
                >
                  <MenuItem value="jpg">jpg</MenuItem>
                  <MenuItem value="png">png</MenuItem>
                  <MenuItem value="xls">xls</MenuItem>
                </Select>
              </StyledFormControl>
            }
          />

          <StyledFormControl>
            <InputLabel id="demo-simple-select-label">Other</InputLabel>
            <Select
              labelId="demo-simple-select-disabled-label"
              id="demo-simple-select-disabled"
              value={changeOtherFile}
              label="Other"
              onChange={handleChangeOtherFile}
            >
              <MenuItem value="jpg">jpg</MenuItem>
              <MenuItem value="png">png</MenuItem>
              <MenuItem value="xls">xls</MenuItem>
            </Select>
          </StyledFormControl>
        </RadioGroup>
      </FormControl>
    </Paper>
  );
}
export default UploadTypeSelection;
