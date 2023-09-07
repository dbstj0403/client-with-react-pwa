import React from 'react';
import RoadMap from './Roadmap';
import Schedule from './Schedule';
import Slogan from './Slogan';
import OperatingTime from './OperatingTime';
import styled from 'styled-components';
import Celebrity from './Celebrity';

function Rest() {
  return (
    <Container>
      <Slogan />
      <RoadMap />
      <Celebrity />
      <Schedule />
      <OperatingTime />
    </Container>
  );
}

export default Rest;

const Container = styled.div`
  position: relative;
  top: 110rem;
`;
