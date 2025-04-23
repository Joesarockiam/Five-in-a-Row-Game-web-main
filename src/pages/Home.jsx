import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, keyframes } from '@mui/material';
import { styled } from '@mui/system';
import ShootingStars from '../components/ShootingStars.jsx';


// Keyframes for animated text
const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

// Styled animated title inside a box
const AnimatedText = styled(Typography)(({ theme }) => ({
  animation: `${pulse} 3s infinite`,
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#fff',
  textShadow: '2px 2px 8px rgba(0,0,0,0.8)',

  fontSize: '2.5rem',
}));

// Styled container box with background and blur effect
const CenterBox = styled(Box)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  padding: theme.spacing(6),
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  zIndex: 2,
  position: 'relative',
}));

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/game');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent',
      }}
    >
      {/* Shooting stars background layer */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <ShootingStars />
      </Box>

      {/* Foreground content */}
      <CenterBox>
        <AnimatedText
          variant="h2"
          sx={{
            mb: 4,
            fontFamily: '"Cinzel", serif',
            letterSpacing: 2,
          }}
        >
          THE FIFTH MOVE
        </AnimatedText>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            px: 5,
            py: 1.8,
            borderRadius: 2,
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            fontWeight: 'bold',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
            },
          }}
          onClick={handleStart}
        >
          It’s Go Time
        </Button>
      </CenterBox>
    </Box>
  );
};

export default Home;
