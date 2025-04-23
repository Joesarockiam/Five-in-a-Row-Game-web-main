import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 3,
        background: 'linear-gradient(90deg, #0f2027, #203a43, #2c5364)',
        color: '#00ffff',
        boxShadow: '0 4px 10px rgba(0, 255, 255, 0.3)',
        animation: 'fadeIn 1s ease-in',
        '@keyframes fadeIn': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        }
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: '"Orbitron", sans-serif',
          textShadow: '0 0 10pxrgb(145, 255, 0), 0 0 20px #00ffff',
          letterSpacing: 2
        }}
      >
        Five in a Row
      </Typography>
    </Box>
  );
};

export default Header;
