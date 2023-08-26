import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import { Home } from './pages/Home';
import Facilities from './pages/Facilities';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
      </Route>
    </Routes>
  );
}

export default App;
