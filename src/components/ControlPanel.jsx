import { Button, Stack } from '@mui/material';
import { useEffect } from 'react';

const ControlPanel = ({ onRestart, onUndo, disableUndo }) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const baseButtonStyles = {
    fontFamily: '"Orbitron", sans-serif',
    fontSize: '1.1rem', // Slightly larger text
    padding: '12px 24px', // Bigger button
    textTransform: 'uppercase',
    fontWeight: 'bold',
    borderRadius: '8px',
  };

  const neonButtonStyles = {
    ...baseButtonStyles,
    color: '#000',
    backgroundColor: '#00ffff', // Solid background
    border: '2px solid #00ffff',
    boxShadow: '0 0 10px #00ffff',
    '&:hover': {
      backgroundColor: '#00ffff',
      boxShadow: '0 0 20px #00ffff, 0 0 40px #00ffff',
    },
    '&:disabled': {
      borderColor: '#999',
      color: '#999',
      backgroundColor: '#eee',
      boxShadow: 'none',
    }
  };

  const restartButtonStyles = {
    ...baseButtonStyles,
    color: '#000',
    backgroundColor: '#00ff6e',
    border: '2px solid #00ff6e',
    boxShadow: '0 0 10px #00ff6e',
    '&:hover': {
      backgroundColor: '#00ff6e',
      boxShadow: '0 0 20px #00ff6e, 0 0 40px #00ff6e',
    }
  };

  return (
    <Stack direction="row" spacing={3} justifyContent="center" sx={{ mt: 4 }}>
      <Button
        onClick={onUndo}
        disabled={disableUndo}
        sx={neonButtonStyles}
      >
        Undo Move
      </Button>
      <Button
        onClick={onRestart}
        sx={restartButtonStyles}
      >
        Restart Game
      </Button>
    </Stack>
  );
};

export default ControlPanel;
