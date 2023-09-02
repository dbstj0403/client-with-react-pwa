import styled from 'styled-components';
import React from 'react';
import InfoCard from '@/components/wowDj/InfoCard';
import LineUp from '@/components/wowDj/LineUp';

import MapImg from '../assets/image/djFestivalMapImg.svg';
import backgroundImg1 from '../assets/image/FestivalBackground.svg';
import backgroundImg2 from '../assets/image/InfoCardBackground.svg';
import MoveToTopBtn from '@/components/common/btn/MoveToTopBtn';

function WowDigitalFestival() {
  return (
    <Container>
      <Title>와우 디제잉 페스티벌</Title>
      <TitleInfo>
        와우 디제잉 페스티벌이란 이런 저런
        <br /> 페스티벌 디제이가 와서 디제잉을 합니다. <br />
        이런 저런 디제잉을 디제이가 합니다.
      </TitleInfo>

      <ImgWrapper>
        <ImgContainer>
          <img src={MapImg} alt="" className="mapImg" />
        </ImgContainer>
        <ImgContainer2>
          <img src={backgroundImg1} alt="" />
        </ImgContainer2>
      </ImgWrapper>

      <ImgWrapper>
        <InfoCard />
        <ImgContainer3>
          <img src={backgroundImg2} alt="" />
        </ImgContainer3>
      </ImgWrapper>

      <ImgWrapper>
        <LineUp />
        <ImgContainer4>
          <img src={backgroundImg2} alt="" />
        </ImgContainer4>
      </ImgWrapper>

      <MoveToTopBtn />
    </Container>
  );
}

export default WowDigitalFestival;
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Title = styled.div`
  font-family: Inter;
  margin-top: 3rem;
  ${(props) => props.theme.fontStyles.head1};
  margin-top: 12rem;
  text-align: center;
`;
const TitleInfo = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  color: ${(props) => props.theme.colors.gray300};
  ${(props) => props.theme.fontStyles.body1};
  text-align: center;
`;
const ImgWrapper = styled.div`
  width: 37.5rem;
  position: relative;
`;
const ImgContainer = styled.div`
  width: 33.5rem;
  height: 48.4rem;
  margin-top: 2rem;
  margin: 0 auto;
  img {
    width: 33.5rem;
    height: 48.4rem;
  }
`;
const ImgContainer2 = styled.div`
  position: absolute;
  bottom: -25.5rem;
  left: -5rem;
  width: 50rem;
  height: 40rem;
  img {
    width: 23.679rem;
    height: 29.317rem;
    mix-blend-mode: exclusion;
  }
`;
const ImgContainer3 = styled.div`
  position: absolute;
  bottom: -6rem;
  left: 15rem;
  img {
    width: 23.679rem;
    height: 29.317rem;
  }
`;
const ImgContainer4 = styled.div`
  position: absolute;
  top: 129rem;
  right: 24rem;
  img {
    width: 23.679rem;
    height: 29.317rem;
    transform: rotate(80deg);
    mix-blend-mode: exclusion;
  }
`;
