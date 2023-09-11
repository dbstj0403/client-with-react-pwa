import React, { useEffect, useState } from 'react';
import Landing from './main/Landing';
import Campus from './main/Campus';
import Rest from './main/Rest';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { lineupState, pageState, roadmapClickState } from '@/libs/store';
import MoveToTopBtn from '@/components/common/btn/MoveToTopBtn';

function Home() {
  const [scroll, setScroll] = useState(0);
  const isLineupShow = useRecoilValue(lineupState);
  const isPage = useSetRecoilState(pageState);
  const [isRoadmapClick, setIsRoadmapClick] = useRecoilState(roadmapClickState);

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
    if (isRoadmapClick) {
      window.scrollTo({
        top: getScrollTo(),
        behavior: 'smooth',
      });
    }
    return () => {
      setIsRoadmapClick(false);
    };
  }, []);

  const getScrollTo = () => {
    if (window.innerWidth < 450) {
      return 1700;
    } else if (window.innerWidth < 600) {
      return 2200;
    } else {
      return 2750;
    }
  };

  useEffect(() => {
    isPage('');
  }, []);

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
  width: 100%;
  height: ${(props) => (props.islineupshow ? '1100rem' : '560rem')};

  display: flex;
  flex-direction: column;
  align-items: center;
`;
