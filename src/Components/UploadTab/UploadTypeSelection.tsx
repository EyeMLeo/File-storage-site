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

const demoArray2: number[] = [1, 1, 3, 4, 5];

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
  let displayNames: any = React.useRef([]);
  const [displayNames2, setDisplayNames2] = React.useState<any>(displayNames);

  React.useEffect(() => {
    firebseDataNameHander().then((res: any) => {
      displayNames = res;
      console.log('displayNames.values()  ===', displayNames.keys());
      // setDisplayNames2((prev: any) => [...prev, res]);
      setDisplayNames2(displayNames);
      console.log('displayNames ===', displayNames);
      console.log('displayNames2 ===', displayNames2);
      // console.log('displayNames ===', displayNames[0]);
      // console.log('demoArray ===', demoArray);
      // console.log('displayNames ===', typeof displayNames);
      // console.log('res type ===', typeof res);
      // console.log('demoArray type ===', typeof demoArray);
      // console.log('demoArray2 type ===', typeof demoArray2);
      // console.log('Object.keys(displayNames) ===', Object.keys(displayNames));
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
        {/* {displayNames.forEach((element: any) => console.log(element))} */}
        {/* 
        {displayNames.map((element: any) => {
          console.log('element ===', element);
          return <FileNameLine fileName={element.generation} />;
        })} */}
        {demoArray.map((element: any) => {
          console.log('element ===', element);
          return <FileNameLine fileName={element.firstName} />;
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
