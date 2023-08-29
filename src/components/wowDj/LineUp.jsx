import styled from 'styled-components';
import React from 'react';
function LineUp() {
  return (
    <LineUpContainer>
      <Title>DJ 라인업</Title>
    </LineUpContainer>
  );
}

export default LineUp;

const LineUpContainer = styled.div`
  width: 33.5rem;
  height: 70rem;
  border: 1px solid;
  margin-top: 6rem;
`;
const Title = styled.div`
  font-family: Pretendard;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 3.2rem;
  letter-spacing: 0em;
  text-align: center;
`;
