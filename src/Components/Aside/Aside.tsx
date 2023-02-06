import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Notifications from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const StyledAside = styled.aside`
  padding-top: 70px;
  width: 220px;
  height: 100%;
  box-shadow: 0 0 20px 0px #00000059;
  z-index: 2;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const StyledNavLink = styled.div`
  display: flex;
  background-color: #e9cee8;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
`;
const StyledNavLink2 = styled.div`
  display: flex;
  /* background-color: #e9cee8; */
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
`;

const StyledULBox = styled.div`
  margin-left: 3rem;
`;

function Aside() {
  return (
    <StyledAside>
      <StyledNavLink>
        <Box
          sx={{
            backgroundColor: 'primary.main',
            height: '30px',
            width: '30px',
            borderRadius: '10px',
            ml: -3,
          }}
        />
        <HomeIcon sx={{ fontSize: 30, mx: 2 }} color="primary" />
        <Typography color="primary" sx={{ fontSize: 20 }}>
          Upload
        </Typography>
      </StyledNavLink>
      <StyledNavLink2>
        <Box
          sx={{
            // backgroundColor: 'primary.main',
            height: '30px',
            width: '30px',
            borderRadius: '10px',
            ml: -3,
          }}
        />
        <InsertDriveFileIcon
          sx={{ color: 'text.secondary', fontSize: 30, mx: 2 }}
        />
        <Typography color="text.secondary" sx={{ fontSize: 20 }}>
          Upload
        </Typography>
      </StyledNavLink2>
      <StyledULBox>
        <ul>
          {' '}
          <Typography color="text.secondary" sx={{ fontSize: 20 }}>
            <li>Inbox</li>
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: 20 }}>
            <li>Sent</li>
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: 20 }}>
            <li>Drafts</li>
          </Typography>
        </ul>
      </StyledULBox>
    </StyledAside>
  );
}
export default Aside;
