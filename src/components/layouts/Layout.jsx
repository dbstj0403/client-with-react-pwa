import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Header from './Header';
import { sideState } from '@/libs/store';
import SideBar from '../sidebar/SideBar';
import Footer from './Footer';
import theme from '@/styles/theme';

const Layout = () => {
  const [isOpen, setIsOpen] = useRecoilState(sideState);
  const mainContainerRef = useRef(null);

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    if (isOpen && mainContainerRef.current && !mainContainerRef.current.contains(e.target)) {
      await setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleClose);
    } else {
      window.removeEventListener('click', handleClose);
    }
    return () => {
      window.removeEventListener('click', handleClose);
    };
  }, [isOpen]);

  return (
    <Container>
      <SideBar innerRef={mainContainerRef} />
      <Header innerRef={mainContainerRef} />
      {isOpen && <DarkOverlay />}
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;
  min-width: 375px;
  max-width: 768px;
  min-height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
`;

const DarkOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #131313b2;
  z-index: 1;
`;
