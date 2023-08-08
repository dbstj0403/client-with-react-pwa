import React from 'react';
import { Routes } from 'react-router-dom';
import { styled } from 'styled-components';

function App() {
  return (
    <HomePageTemplate>
      {/* header 컴포넌트 */}

      <Routes>{/* 라우팅할 페이지 */}</Routes>

      {/* footer 컴포넌트 */}

      {/* drawal 컴포넌트 */}
    </HomePageTemplate>
  );
}

const HomePageTemplate = styled.div`
  display: flex;

  flex: 1;
  flex-direction: column;
`;

export default App;
