import React from 'react';
import Landing from './main/Landing';
import Campus from './main/Campus';
import Rest from './main/Rest';
import styled from 'styled-components';

function Home() {
  return (
    <Container>
      <Campus />
      <Landing />
      <Rest />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  position: relative;
`;
