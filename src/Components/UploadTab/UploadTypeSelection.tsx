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
import {
  listAll,
  storage,
  firebseMetaDataHander,
  savadFirebaseDataNames,
  firebseDataNameHander,
} from '../../Firebase';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const StyledPaper = styled(Paper)`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const StyledClearAllLink = styled.a`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  float: right;
`;

const demoArray = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Anna', lastName: 'Smith' },
  { firstName: 'Peter', lastName: 'Jones' },
  { firstName: 'Peter', lastName: 'Jones' },
];

function UploadTypeSelection() {
  const [value, setValue] = React.useState('pdfValue');

  const handleChangePDF = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [changeOtherFile, setChangeOtherFile] = React.useState('');

  const handleChangeOtherFile = (event: SelectChangeEvent) => {
    setChangeOtherFile(event.target.value);
  };

  const [displayNames, setdisplayNames] = React.useState([]);

  React.useEffect(() => {
    firebseDataNameHander().then((res: any) => {
      console.log('resa ===', res);
      setdisplayNames(res);
      console.log('displayNames ===', displayNames);
    });
  }, []);

  // React.useEffect(() => {
  //   firebseDataNameHander()
  //     .then((res: any) => res.json())
  //     .then((json) => console.log(json));
  // }, []);

  return (
    <>
      <SharedPaperStyle heading="Type of document" height="180px">
        <CheckBoxLine />
        <CheckBoxLine />
      </SharedPaperStyle>
      <SharedPaperStyle heading="List of uploads"></SharedPaperStyle>
      <SharedPaperStyle heading="List of uploads">
        {displayNames.map((element: any) => {
          console.log('element ===', element);
          return <FileNameLine />;
        })}
        {demoArray.map((element: any) => {
          console.log('element ===', element);
          return <FileNameLine />;
        })}

        {/* <FileNameLine fileName="asd" /> */}
        {/* <FileNameLine /> */}
        {/* <FileNameLine /> */}
        <StyledClearAllLink href="">Clear all</StyledClearAllLink>
      </SharedPaperStyle>
    </>
  );
}
export default UploadTypeSelection;
