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
import { FullMetadata } from 'firebase/storage';
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
  // let displayNames: any = React.useRef([]);
  const [displayNames, setDisplayNames] = React.useState<FullMetadata[]>([]);

  React.useEffect(() => {
    firebseDataNameHander().then((res) => {
      // displayNames = res;
      console.log('displayNames.values()  ===', displayNames.keys());
      // setDisplayNames2((prev: any) => [...prev, res]);
      // setDisplayNames2(displayNames);
      setDisplayNames(res);

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
        {/* {displayNames.forEach((element: any) => console.log(element))} */}

        {displayNames.map((element) => {
          console.log('element ===', element);
          return (
            <FileNameLine
              key={element.generation}
              fileName={element.fullPath}
            />
          );
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
