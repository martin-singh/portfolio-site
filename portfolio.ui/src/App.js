import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar/NavBar.js';
import Home from './pages/home.js';
import Work from './pages/work.js';
import Education from './pages/education.js';

function App() {
  return (
    <>
      <NavBar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
