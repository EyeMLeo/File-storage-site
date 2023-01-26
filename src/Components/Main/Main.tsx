import styled from 'styled-components';
import Header from '../Header/Header';
import ContentBox from '../ContentBox/ContentBox';

const StyledMain = styled.main`
  height: 100%;
  background-color: black;
  background: linear-gradient(90deg, #faf5fa 0%, #edcaec 100%);
  z-index: 1;
`;
function Main() {
  return (
    <StyledMain>
      <Header />
      <ContentBox />
    </StyledMain>
  );
}
export default Main;
