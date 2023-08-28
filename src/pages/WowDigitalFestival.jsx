import styled from 'styled-components';
import React from 'react';

function WowDigitalFestival() {
  return (
    <Container>
      <Title>와우 디제잉 페스티벌</Title>
      <TitleInfo>
        와우 디제잉 페스티벌이란 이런 저런
        <br /> 페스티벌 디제이가 와서 디제잉을 합니다. <br />
        이런 저런 디제잉을 디제이가 합니다.
      </TitleInfo>
      <Hrdiv />
    </Container>
  );
}

export default WowDigitalFestival;
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 33.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-family: Inter;
  margin-top: 3rem;
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: 0em;
  text-align: center;
`;
const TitleInfo = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.6rem;
  text-align: center;
`;
const Hrdiv = styled.div`
  width: 33.5rem;
  height: 0.1rem;
  background-color: lightgray;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
