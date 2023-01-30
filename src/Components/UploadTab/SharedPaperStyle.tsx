import * as React from 'react';
import styled from 'styled-components';
import { Paper, Typography } from '@mui/material';
interface SharedPaperStyleProps {
  heading?: string;
  height?: string;
  children?: any;
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
        p: 1,
        height: { height },
      }}
      // elevation={2}
      square={true}
    >
      <Typography
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
