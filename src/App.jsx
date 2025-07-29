import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bienvenida from './Bienvenida/Bienvenida'; // Ruta correcta según tu estructura

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
      </Routes>
    </Router>
  );
}

export default App;
