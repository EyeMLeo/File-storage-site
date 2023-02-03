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
import {
  getStorage,
  ref,
  listAll,
  deleteObject,
  FullMetadata,
} from 'firebase/storage';
import { storage } from '../../Firebase';

interface FileNameLineProps {
  fileName?: string;
  deleteAction?: Function;
  idPass: number | string;
  arr: FullMetadata[];
  setArr: Function;
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

function FileNameLine({
  fileName = 'File name 123.pdf',
  idPass,
  arr,
  setArr,
}: FileNameLineProps) {
  function deleteFileFromFirebase(fileName: string) {
    // DOM part
    const newArray = arr.filter((item) => item.fullPath !== fileName);
    setArr(newArray);
    //x DOM part

    // Firebase Part
    const deleteASingleFile = ref(storage, fileName);
    // Delete the file
    deleteObject(deleteASingleFile)
      .then(() => {
        // File deleted successfully
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
    // Firebase Part
  }

  return (
    <StyledDiv id={`${idPass}`}>
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
          <DeleteOutlineRoundedIcon
            onClick={() => {
              deleteFileFromFirebase(fileName);

              // remove(e.target);
            }}
            sx={{ color: 'text.secondary' }}
          />
        </div>
      </StyledFileNamePaper>
      <StyledTypography sx={{ color: 'text.disabled' }}>Main</StyledTypography>
    </StyledDiv>
  );
}
export default FileNameLine;
