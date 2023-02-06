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
import { useSelector, useDispatch } from 'react-redux';
import DialogAll from '../DialogAll/DialogAll';
import { fetchingFireBaseDataTrue } from '../Actions/FetchingFireBaseDataActions';
import { FireBaseContext } from '../FireBaseContext/FireBaseContext';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const StyledClearAllLink = styled.p`
  padding: 0.1rem 0;
  text-decoration: underline;
  text-underline-offset: 6px;
  cursor: pointer;
  padding-top: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: right;
  width: 100%;
`;

function UploadTypeSelection() {
  const [deleteModal, setDeleteModal] = React.useState(false);

  function setDeleteModalTogle() {
    setDeleteModal((prev) => !prev);
  }

  const ReducerModal = useSelector((state: any) => {
    state;
    // console.log('state ===', state.ReducerModal);
  });

  const [value, setValue] = React.useState('pdfValue');

  const handleChangePDF = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [changeOtherFile, setChangeOtherFile] = React.useState('');

  const handleChangeOtherFile = (event: SelectChangeEvent) => {
    setChangeOtherFile(event.target.value);
  };

  // const [displayNames, setdisplayNames] = React.useState([]);
  // const [displayNames, setDisplayNames] = React.useState<FullMetadata[]>([]);
  const { displayNames, setDisplayNames, isLoading, setIsLoading }: any =
    React.useContext(FireBaseContext);

  const ReducerFileDataArr = useSelector(
    (state: any) => state.FetchingFireBaseData
  );

  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   firebseDataNameHander().then((res) => {
  //     setDisplayNames(res);
  //   });
  // }, []);

  function deleteALLFilesFromFirebase() {
    displayNames.forEach((element: any) => {
      // Firebase Part
      const deleteASingleFile = ref(storage, element.fullPath);
      // Delete the file
      deleteObject(deleteASingleFile);
    });
    setDisplayNames([]);
  }
  return (
    <>
      <SharedPaperStyle heading="List of uploads">
        {displayNames.map((element: any) => {
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

        <StyledClearAllLink
          onClick={() => {
            setDeleteModalTogle();
          }}
        >
          Clear all
        </StyledClearAllLink>
      </SharedPaperStyle>
      {deleteModal && (
        <DialogAll
          text="Are you sure you want to delete all files? You'll have to start
          uploading process fromthe very beginning."
          display={deleteModal}
          displayHandler={setDeleteModalTogle}
          actionToProceed={deleteALLFilesFromFirebase}
        />
      )}
    </>
  );
}
export default UploadTypeSelection;
