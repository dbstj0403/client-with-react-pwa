import styled from 'styled-components';
import React from 'react';
import LineUpCard from './LineUpCard';
function LineUp() {
  return (
    <LineUpContainer>
      <Title>DJ 라인업</Title>
      <LineUpCard number="1" djName="소다" text="부스 한 줄 소개입니다" />
      <LineUpCard number="2" djName="츄정" text="부스 한 줄 소개입니다" />
      <LineUpCard number="3" djName="아스터" text="부스 한 줄 소개입니다" />
      <LineUpCard number="4" djName="미란이" text="부스 한 줄 소개입니다" />
    </LineUpContainer>
  );
}

export default LineUp;

const LineUpContainer = styled.div`
  width: 33.5rem;
  //height: 70rem;
  margin: 0 auto;
  position: relative;
  margin-top: 17rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.div`
  font-family: Pretendard;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 3.2rem;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 8rem;
`;
