import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import { Home } from './pages/Home';
import WowDigitalFestival from './pages/WowDigitalFestival';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/WowDigitalFestival" element={<WowDigitalFestival />} />
      </Route>
    </Routes>
  );
}

export default App;
