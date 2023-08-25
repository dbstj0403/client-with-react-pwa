import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header';

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
  max-width: 768px;
  min-width: 375px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  background-color: white;
  border: 1px solid black;
`;
