import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header';
import React from 'react';

const Layout = () => {
  return (
    <MainContainer>
      <Header />
      <Outlet />
    </MainContainer>
  );
};

export default Layout;

const MainContainer = styled.div`
  position: relative;
  min-width: 375px;
  max-width: 768px;
  min-width: 375px;
  margin: 0 auto;
  background-color: white;
  border: 1px solid black;
`;
