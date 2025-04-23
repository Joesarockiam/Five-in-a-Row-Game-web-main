import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Adjust according to your file structure
import Game from './pages/Game'; // Adjust according to your file structure

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} /> {/* Ensure this route is correctly set */}
      </Routes>
    </Router>
  );
};

export default App;
