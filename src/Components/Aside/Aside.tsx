import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Notifications from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';

const StyledAside = styled.aside`
  padding-top: 70px;
  width: 300px;
  height: 100%;
  box-shadow: 0 0 20px 0px #00000059;
  z-index: 2;
`;

function Aside() {
  return (
    <StyledAside>
      <HomeIcon /> Upload EN
    </StyledAside>
  );
}
export default Aside;
