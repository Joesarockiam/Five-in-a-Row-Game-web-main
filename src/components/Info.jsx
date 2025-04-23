import React from 'react';
import { Grid, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';

// Styled components
const InfoDiv = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: 16,
  backgroundColor: '#fff',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  border: '2px solid #007bff',
}));

const InfoTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: '#007bff',
  fontWeight: 'bold',
}));

const Info = ({ step, gameOver }) => {
  return (
    <Grid item xs={12} md={3}>
      <InfoDiv>
        <InfoTypography variant="subtitle1">
          <strong>Current Step:</strong> {step}
        </InfoTypography>
        <InfoTypography variant="subtitle1">
          <strong>Total Steps:</strong> {step}
        </InfoTypography>
        <InfoTypography variant="subtitle1" sx={{ mb: 2 }}>
          <strong>Whose Turn:</strong> {gameOver ? 'Game Over' : 'Player (Black)'}
        </InfoTypography>

        <Divider sx={{ my: 3 }} />

        <InfoTypography variant="body1">
          <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>⚫</span>
          <strong>Player:</strong> Black stones
        </InfoTypography>
        <InfoTypography variant="body1">
          <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>⚪</span>
          <strong>AI:</strong> White stones
        </InfoTypography>
      </InfoDiv>
    </Grid>
  );
};

export default Info;
