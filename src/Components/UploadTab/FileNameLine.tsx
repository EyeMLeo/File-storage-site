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
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import CreateOutlined from '@mui/icons-material/CreateOutlined';
import { getStorage, ref, listAll } from 'firebase/storage';

interface FileNameLineProps {
  fileName?: string;
}

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

const StyledFileNamePaper = styled(Paper)`
  display: flex;
  padding: 0.5rem 1.5rem;
  justify-content: space-between;
`;

const StyledTypography = styled(Typography)`
  place-self: center;
  padding: 0 0.8rem;
`;

function FileNameLine({ fileName = 'File name 123.pdf' }: FileNameLineProps) {
  return (
    <StyledDiv>
      <StyledFileNamePaper
        elevation={3}
        sx={{
          borderRadius: '10px',
          mt: 1,
        }}
      >
        <Typography sx={{ color: 'text.primary' }}>{fileName}</Typography>
        <div>
          <CreateOutlined sx={{ color: 'text.secondary' }} />
          <DeleteOutlineRoundedIcon sx={{ color: 'text.secondary' }} />
        </div>
      </StyledFileNamePaper>
      <StyledTypography sx={{ color: 'text.disabled' }}>Main</StyledTypography>
    </StyledDiv>
  );
}
export default FileNameLine;
