import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import { Home } from './pages/Home';
import WowDigitalFestival from './pages/WowDigitalFestival';
import Facilities from './pages/Facilities';
import Pub from './pages/booth/Pub';
import FoodTruck from './pages/booth/FoodTruck';
import CentralStage from './pages/CentralStage';
import HongikZone from './pages/HongikZone';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/WowDigitalFestival" element={<WowDigitalFestival />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/booth/pub" element={<Pub />} />
        <Route path="/booth/foodtruck" element={<FoodTruck />} />
        <Route path="/stage" element={<CentralStage />} />
        <Route path="/hongikzone" element={<HongikZone />} />
      </Route>
    </Routes>
  );
}

export default App;
