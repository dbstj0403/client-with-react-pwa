import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import { Home } from './pages/Home';
import Pub from './pages/booth/Pub';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/booth/pub" element={<Pub />} />
      </Route>
    </Routes>
  );
}

export default App;
