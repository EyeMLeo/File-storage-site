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
} from '@mui/material';
import styled from 'styled-components';
import { Box } from '@mui/system';

const checkBoxLineWidth: string = '450px';

const StyledCheckBoxLine = styled(Box)`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 1rem;
`;
const StyledBox = styled(Paper)`
  border-radius: 10px;
  overflow: hidden;
  width: ${checkBoxLineWidth};
  border: #838383 solid 2px;

  .option {
    padding: 1rem;
    border: none;
    margin-right: 15px;
    background-color: red;
  }
`;

const StyledFormControl = styled(FormControl)`
  border-radius: 15px;
  width: ${checkBoxLineWidth};
  border-radius: 10px;
`;

const StyledSelect = styled.select`
  padding: 1rem;
  border: none;
  margin-right: 15px;
`;
const StyledOption = styled.option`
  border: 0px;
  outline: 0px;
`;

function CheckBoxLine() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const [changeOtherFile, setChangeOtherFile] = React.useState('');

  const handleChangeOtherFile = (event: SelectChangeEvent) => {
    setChangeOtherFile(event.target.value);
  };

  return (
    <StyledCheckBoxLine>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />

      <StyledBox
        sx={{ borderRadius: '16px', m: 2, p: -2 }}
        elevation={4}
        square={true}
      >
        <StyledFormControl>
          <StyledSelect id="otherFile" name="otherFile">
            <StyledOption value="" selected disabled hidden>
              Other
            </StyledOption>
            <StyledOption value="jpg">jpg</StyledOption>
            <StyledOption value="png">png</StyledOption>
            <StyledOption value="xls">xls</StyledOption>
          </StyledSelect>
        </StyledFormControl>
      </StyledBox>
    </StyledCheckBoxLine>
  );
}
export default CheckBoxLine;
