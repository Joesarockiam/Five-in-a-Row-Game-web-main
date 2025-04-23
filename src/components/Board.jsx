import Cell from './Cell';
import Box from '@mui/material/Box';

const Board = ({ board, onCellClick, aiLastMove }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(15, 32px)"
      gridTemplateRows="repeat(15, 32px)"
      justifyContent="center"
      alignItems="center"
      sx={{
        border: '2px solid #bca986',
        backgroundColor: '#fdf6e3', // Light warm background
        padding: '10px',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        width: 'fit-content',
        margin: 'auto',
      }}
    >
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isAiCell =
            aiLastMove?.row === rowIndex && aiLastMove?.col === colIndex;

          return (
            <Box
              key={`${rowIndex}-${colIndex}`}
              onClick={() => onCellClick(rowIndex, colIndex)}
              sx={{
                width: 32,
                height: 32,
                border: '1px solid #d2b48c',
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fffef8',
                cursor: 'pointer',
                transition: '0.2s ease',
                '&:hover': {
                  backgroundColor: '#f1ead9',
                },
                ...(isAiCell && {
                  boxShadow: '0 0 8px 2px #ff6961',
                  animation: 'subtlePulse 1.2s infinite ease-in-out',
                }),
              }}
            >
              <Cell value={cell} />
            </Box>
          );
        })
      )}
      <style jsx="true">{`
        @keyframes subtlePulse {
          0% {
            box-shadow: 0 0 6px 2px #ff6961;
          }
          50% {
            box-shadow: 0 0 10px 3px #ffa07a;
          }
          100% {
            box-shadow: 0 0 6px 2px #ff6961;
          }
        }
      `}</style>
    </Box>
  );
};

export default Board;
