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
import FileNameLine from './FileNameLine';
import { listAll, storage, firebseDataNameHander } from '../../Firebase';
import { deleteObject, FullMetadata, ref } from 'firebase/storage';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const StyledPaper = styled(Paper)`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const StyledClearAllLink = styled.p`
  padding: 0.1rem 0;
  border-bottom: 1px solid black;
  /* text-decoration: underline; */
  cursor: pointer;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  float: right;
`;

function UploadTypeSelection() {
  const [value, setValue] = React.useState('pdfValue');

  const handleChangePDF = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [changeOtherFile, setChangeOtherFile] = React.useState('');

  const handleChangeOtherFile = (event: SelectChangeEvent) => {
    setChangeOtherFile(event.target.value);
  };

  // const [displayNames, setdisplayNames] = React.useState([]);
  const [displayNames, setDisplayNames] = React.useState<FullMetadata[]>([]);

  React.useEffect(() => {
    firebseDataNameHander().then((res) => {
      setDisplayNames(res);
    });
  }, []);

  function deleteALLFilesFromFirebase() {
    displayNames.forEach((element) => {
      // Firebase Part
      const deleteASingleFile = ref(storage, element.fullPath);
      // Delete the file
      deleteObject(deleteASingleFile);
    });
    setDisplayNames([]);
    alert('delete comlete');
  }

  return (
    <>
      <SharedPaperStyle heading="Type of document" height="180px">
        <CheckBoxLine />
        <CheckBoxLine />
      </SharedPaperStyle>
      <SharedPaperStyle heading="List of uploads">
        {displayNames.map((element) => {
          return (
            <FileNameLine
              idPass={`${element.generation}`}
              key={element.generation}
              fileName={element.fullPath}
              arr={displayNames}
              setArr={setDisplayNames}
            />
          );
        })}

        <StyledClearAllLink onClick={deleteALLFilesFromFirebase}>
          Clear all
        </StyledClearAllLink>
      </SharedPaperStyle>
    </>
  );
}
export default UploadTypeSelection;
