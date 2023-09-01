import React, { useEffect, useState } from 'react';
import Landing from './main/Landing';
import Campus from './main/Campus';
import Rest from './main/Rest';
import styled from 'styled-components';

function Home() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScroll(scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <Campus scroll={scroll} />
      <Landing scroll={scroll} />
      <Rest />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  position: relative;
`;
