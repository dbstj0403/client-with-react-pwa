import React, { useEffect, useState } from 'react';
import Landing from './main/Landing';
import Campus from './main/Campus';
import Rest from './main/Rest';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { lineupState } from '@/libs/store';
import MoveToTopBtn from '@/components/common/btn/MoveToTopBtn';
import { useLocation } from 'react-router-dom';

function Home() {
  const [scroll, setScroll] = useState(0);
  const isLineupShow = useRecoilValue(lineupState);
  const location = useLocation();

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

  useEffect(() => {
    if (location.state === null) return;

    if (location.state.isRoadmapClick) {
      window.scrollTo({
        top: getScrollTo(),
        behavior: 'smooth',
      });
    }
  }, [location.state]);

  const getScrollTo = () => {
    if (window.innerWidth < 450) {
      return 1700;
    } else if (window.innerWidth < 600) {
      return 2200;
    } else {
      return 2750;
    }
  };

  return (
    <Container islineupshow={isLineupShow ? 1 : 0}>
      <Campus scroll={scroll} />
      <Landing scroll={scroll} />
      <Rest />
      <MoveToTopBtn />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  position: relative;
  max-width: 76.8em;
  height: ${(props) => (props.islineupshow ? '1100rem' : '560rem')};

  display: flex;
  flex-direction: column;
  align-items: center;
`;
