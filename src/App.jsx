import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import WowDjFestival from './pages/WowDjFestival';
import Home from './pages/Home';
import Facilities from './pages/Facilities';
import Pub from './pages/booth/Pub';
import FoodTruck from './pages/booth/FoodTruck';
import CentralStage from './pages/CentralStage';
import HongikZone from './pages/HongikZone';
import MadeBy from './pages/MadeBy';
import Profit from './pages/booth/Profit';
import Semicolon from './pages/Semicolon';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/wowdjfestival" element={<WowDjFestival />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/booth/pub" element={<Pub />} />
        <Route path="/booth/profit" element={<Profit />} />
        <Route path="/booth/foodtruck" element={<FoodTruck />} />
        <Route path="/stage" element={<CentralStage />} />
        <Route path="/hongikzone" element={<HongikZone />} />
        <Route path="/madeby" element={<MadeBy />} />
        <Route path="/semicolon" element={<Semicolon />} />
      </Route>
    </Routes>
  );
}

export default App;
