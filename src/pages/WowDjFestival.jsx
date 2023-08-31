import styled from 'styled-components';
import React from 'react';
import InfoCard from '@/components/wowDj/InfoCard';
import LineUp from '@/components/wowDj/LineUp';
import moveTopBtnIcon from '@/assets/icons/moveTopBtnIcon.svg';
import MapImg from '../assets/image/djFestivalMapImg.svg';
import backgroundImg1 from '../assets/image/FestivalBackground.svg';
import backgroundImg2 from '../assets/image/InfoCardBackground.svg';

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
  margin-bottom: 2rem;
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
