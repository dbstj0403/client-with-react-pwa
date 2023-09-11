import React, { useEffect, useState } from 'react';
import Landing from './main/Landing';
import Campus from './main/Campus';
import Rest from './main/Rest';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { lineupState, pageState } from '@/libs/store';
import MoveToTopBtn from '@/components/common/btn/MoveToTopBtn';

function Home() {
  const [scroll, setScroll] = useState(0);
  const isLineupShow = useRecoilValue(lineupState);
  const isPage = useSetRecoilState(pageState);

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
