import * as React from 'react';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import UploadTab from '../UploadTab/UploadTab';
import ListOfUploads from '../UploadTab/ListOfUploads';
import UploadTypeSelection from '../UploadTab/UploadTypeSelection';
import PDFReader from '../PDFReader/PDFReader';
import { FireBaseContext } from '../FireBaseContext/FireBaseContext';

const StyledContentBox = styled(Paper)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  margin: 30px;
  width: auto;
  /* height: 70%; */
  height: calc(100% - 150px);

  @media screen and (max-width: 1000px) {
    grid-template-columns: 3fr 2fr;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StyledBar = styled.div`
  height: fit-content;
`;

function ContentBox() {
  const { displayNames, setDisplayNames, isLoading, setIsLoading }: any =
    React.useContext(FireBaseContext);

  console.log(displayNames[0]);
  // console.log(!!displayNames);

  return (
    <StyledContentBox sx={{ borderRadius: '30px' }} elevation={4}>
      <StyledBar>
        <UploadTypeSelection />
        {displayNames[0] && <ListOfUploads />}
      </StyledBar>
      <StyledBar className="TEST">
        <UploadTab />
        {displayNames[0] && <PDFReader />}
      </StyledBar>
    </StyledContentBox>
  );
}
export default ContentBox;
