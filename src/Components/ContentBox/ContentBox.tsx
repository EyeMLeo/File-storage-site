import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import UploadTab from '../UploadTab/UploadTab';
import UploadTypeSelection from '../UploadTab/UploadTypeSelection';

const StyledContentBox = styled(Paper)`
  display: grid;
  grid-template-columns: 2fr 3fr;
  background-color: white;
  margin: 30px;
  width: auto;
  /* height: 70%; */
  height: calc(100% - 150px);
`;

function ContentBox() {
  return (
    <StyledContentBox sx={{ borderRadius: '30px' }} elevation={4}>
      <UploadTypeSelection />
      <UploadTab />
    </StyledContentBox>
  );
}
export default ContentBox;
