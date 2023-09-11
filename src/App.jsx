import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import WowDjFestival from './pages/WowDjFestival';
import Home from './pages/Home';
import Facilities from './pages/Facilities';
import Pub from './pages/booth/Pub';
import FoodTruck from './pages/booth/FoodTruck';
import CentralStage from './pages/CentralStage';
import HongikZone from './pages/HongikZone';
import MadeBy from './pages/MadeBy';
import Entrance from './pages/Entrance';
import Profit from './pages/booth/Profit';
import Promotion from './pages/booth/Promotion';
import Semicolon from './pages/Semicolon';
import { useEffect } from 'react';
import AdminLogin from './pages/auth/AdminLogin';
import KakaoLogin from './pages/auth/KakaoLogin';
import AuthManager from './utils/AuthManager';

import { useRecoilValue } from 'recoil';
import { roadmapClickState } from './libs/store';

function App() {
  const { pathname } = useLocation();
  const isRoadmapClick = useRecoilValue(roadmapClickState);

  useEffect(() => {
    if (!isRoadmapClick) window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route element={<AuthManager />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminlogin/oauth" element={<KakaoLogin />} />

          {/* 관리자 권한 기능 있는 페이지 */}

          <Route path="/booth/profit" element={<Profit />} />
          <Route path="/booth/promotion" element={<Promotion />} />
          <Route path="/booth/pub" element={<Pub />} />
          <Route path="/booth/foodtruck" element={<FoodTruck />} />

          {/* 관리자 권한 기능 없는 페이지 */}
          <Route path="/stage" element={<CentralStage />} />
          <Route path="/hongikzone" element={<HongikZone />} />
          <Route path="/wowdjfestival" element={<WowDjFestival />} />
          <Route path="/entrance" element={<Entrance />} />
          <Route path="/facilities" element={<Facilities />} />

          <Route path="/madeby" element={<MadeBy />} />
          <Route path="/semicolon" element={<Semicolon />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
