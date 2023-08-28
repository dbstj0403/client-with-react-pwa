import React from 'react';
import Landing from './../components/main/Landing';
import Campus from './../components/main/Campus';
import RoadMap from './../components/main/Roadmap';
import Schedule from './../components/main/Schedule';

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
