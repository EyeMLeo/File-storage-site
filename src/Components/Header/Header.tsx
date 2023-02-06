import styled from '@emotion/styled';
import HomeIcon from '@mui/icons-material/Home';
import Notifications from '@mui/icons-material/Notifications';
import { Avatar, Badge } from '@mui/material';
import Typography from '@mui/material/Typography';

const StyledHeader = styled.header`
  display: flex;
  justify-content: right;
  align-items: center;
  height: 70px;
  background-color: white;
  padding-right: 30px;
`;

function Header() {
  return (
    <StyledHeader>
      <Typography
        sx={{ color: 'text.secondary', fontWeight: 'bold' }}
        variant="h6"
      >
        EN
      </Typography>
      <Badge sx={{ m: 2 }} badgeContent={1} color="error">
        <Notifications color="action" />
      </Badge>
      <Avatar alt="User avatar" src="/IMG/avatar.jpg" />
    </StyledHeader>
  );
}
export default Header;
