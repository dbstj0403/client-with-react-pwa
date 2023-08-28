import React from 'react';
import Landing from './main/Landing';
import Campus from './main/Campus';
import RoadMap from './main/Roadmap';
import Schedule from './main/Schedule';

function Home() {
  return (
    <>
      <Campus />
      <Landing />
      <RoadMap />
      <Schedule />
    </>
  );
}

export default Home;
