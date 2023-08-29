import styled from 'styled-components';
import React from 'react';
import InfoCard from '@/components/wowDj/InfoCard';
import LineUp from '@/components/wowDj/LineUp';
import moveTopBtnIcon from '@/assets/icons/moveTopBtnIcon.svg';

function WowDigitalFestival() {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <Title>와우 디제잉 페스티벌</Title>
      <TitleInfo>
        와우 디제잉 페스티벌이란 이런 저런
        <br /> 페스티벌 디제이가 와서 디제잉을 합니다. <br />
        이런 저런 디제잉을 디제이가 합니다.
      </TitleInfo>
      <Hrdiv />
      <ImgContainer>지 도 사 진</ImgContainer>
      <InfoCard />
      <LineUp />
      <MoveToTopBtn onClick={goToTop}>
        <img src={moveTopBtnIcon} alt="" />
        <BtnText>맨 위로</BtnText>
      </MoveToTopBtn>
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
const ImgContainer = styled.div`
  width: 33.5rem;
  height: 48.4rem;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;
const MoveToTopBtn = styled.button`
  width: 11.2rem;
  height: 4.8rem;
  border-radius: 4rem;
  padding: 1.2rem 2rem 1.2rem 2rem;
  background-color: black;
  color: white;
  margin-bottom: 3rem;
  margin-top: 3rem;
  img {
    width: 2.4rem;
    height: 2.4rem;
    padding-right: 0.2rem;
  }
  display: flex;
  justify-content: space-between;
`;
const BtnText = styled.p`
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.4rem;
  letter-spacing: 0em;
  text-align: left;
`;
