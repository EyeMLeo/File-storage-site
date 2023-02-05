import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import UploadTab from '../UploadTab/UploadTab';
import ListOfUploads from '../UploadTab/ListOfUploads';
import UploadTypeSelection from '../UploadTab/UploadTypeSelection';
import PDFReader from '../PDFReader/PDFReader';

const StyledContentBox = styled(Paper)`
  display: grid;
  grid-template-columns: 2fr 3fr;
  background-color: white;
  margin: 30px;
  width: auto;
  /* height: 70%; */
  height: calc(100% - 150px);
`;

const StyledBar = styled.div`
  height: fit-content;
`;

function ContentBox() {
  return (
    <StyledContentBox sx={{ borderRadius: '30px' }} elevation={4}>
      <StyledBar>
        <UploadTypeSelection />
        <ListOfUploads />
      </StyledBar>
      <StyledBar className="TEST">
        <UploadTab />
        <PDFReader />
      </StyledBar>
    </StyledContentBox>
  );
}
export default ContentBox;
