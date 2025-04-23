import { useEffect, useState, useRef } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Board from '../components/Board';
import Header from '../components/Header';
import ControlPanel from '../components/ControlPanel';
import Rules from '../components/Rules';
import gameService from '../services/gameService';
import Info from '../components/Info';
import CosmicBackground from '../components/CosmicBackground'; // Import the cosmic background

const Game = () => {
  const [board, setBoard] = useState(Array(15).fill(null).map(() => Array(15).fill('')));
  const [history, setHistory] = useState([]);
  const [gameId, setGameId] = useState(null);
  const [aiLastMove, setAiLastMove] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [step, setStep] = useState(0);

  const hasStarted = useRef(false);

  useEffect(() => {
    const startGame = async () => {
      if (hasStarted.current) return;
      hasStarted.current = true;
      const response = await gameService.startNewGame();
      setGameId(response.data.gameId);
    };
    startGame();
  }, []);

  const handleCellClick = async (row, col) => {
    if (!board[row][col] && !gameOver) {
      const updatedBoard = board.map(r => [...r]);
      updatedBoard[row][col] = 'X';
      setHistory([...history, board]);
      setBoard(updatedBoard);
      setStep(step + 1);

      const userResponse = await gameService.userMove(gameId, row, col);

      if (userResponse.data.winner) {
        setGameOver(true);
        setWinner(userResponse.data.winner);
        return;
      }

      const aiResponse = await gameService.aiMove(gameId);
      const aiMove = aiResponse.data.move;

      if (aiMove) {
        updatedBoard[aiMove.row][aiMove.col] = 'O';
        setBoard([...updatedBoard]);
        setAiLastMove({ row: aiMove.row, col: aiMove.col });
        setStep(step + 2);

        if (aiResponse.data.winner) {
          setGameOver(true);
          setWinner(aiResponse.data.winner);
        }
      }
    }
  };

  const handleUndo = () => {
    if (gameOver || history.length === 0) return;
    const prevBoard = history[history.length - 1];
    setBoard(prevBoard);
    setHistory(history.slice(0, -1));
    setAiLastMove(null);
    setStep(step - 2);
  };

  const handleRestart = async () => {
    const shouldSave = window.confirm('Do you want to save the current board?');
    if (shouldSave && gameId) {
      await gameService.saveBoard(gameId);
    }

    const response = await gameService.startNewGame();
    setGameId(response.data.gameId);
    setBoard(Array(15).fill(null).map(() => Array(15).fill('')));
    setHistory([]);
    setAiLastMove(null);
    setGameOver(false);
    setWinner(null);
    setStep(0);
  };

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <CosmicBackground /> {/* Starry animated background */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Grid container spacing={4}>
            {/* Rules Panel - LEFT */}
            <Grid item xs={12} md={3}>
              <Rules />
            </Grid>

            {/* Game Board - CENTER */}
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <Board board={board} onCellClick={handleCellClick} aiLastMove={aiLastMove} />
            </Grid>

            {/* Info Panel - RIGHT */}
            <Grid item xs={12} md={3}>
              <Info step={step} gameOver={gameOver} />
            </Grid>
          </Grid>

          {/* Game Over Message */}
          {gameOver && (
  <Box
    sx={{
      mt: 3,
      mx: 'auto',
      p: 2,
      maxWidth: 300,
      border: '2px solid',
      borderColor: winner === 'user' ? 'green' : 'red',
      borderRadius: 2,
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      boxShadow: 3,
    }}
  >
    <Typography
      variant="h6"
      sx={{
        color: winner === 'user' ? 'green' : 'red',
        fontWeight: 'bold',
      }}
    >
      Game Over! Winner: {winner === 'user' ? 'You' : 'AI'}
    </Typography>
  </Box>
)}


          {/* Control Panel */}
          <Box display="flex" justifyContent="center" mt={3}>
            <ControlPanel onRestart={handleRestart} onUndo={handleUndo} disableUndo={gameOver} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Game;
