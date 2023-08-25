import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import { Home } from './pages/Home';
import CentralStage from './pages/CentralStage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/stage" element={<CentralStage />} />
      </Route>
    </Routes>
  );
}

export default App;
