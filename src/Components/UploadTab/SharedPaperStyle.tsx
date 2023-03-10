import * as React from 'react';
import styled from 'styled-components';
import { Paper, Typography } from '@mui/material';
interface SharedPaperStyleProps {
  heading?: string;
  height?: string;
  children?: React.ReactNode;
}

function SharedPaperStyle({
  heading,
  children,
  height = 'auto',
}: SharedPaperStyleProps) {
  return (
    <Paper
      sx={{
        border: 1,
        borderColor: '#eeeeee',
        borderRadius: '16px',
        m: 4,
        py: 1,
        px: 2,
        height: { height },
      }}
      // elevation={2}
      square={true}
    >
      <Typography
        variant="h6"
        sx={{
          ml: 1,
        }}
      >
        {heading}
      </Typography>
      {children}
    </Paper>
  );
}
export default SharedPaperStyle;
