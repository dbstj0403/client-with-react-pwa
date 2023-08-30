import styled from 'styled-components';
import React from 'react';
import InfoCard from '@/components/wowDj/InfoCard';
import LineUp from '@/components/wowDj/LineUp';
import moveTopBtnIcon from '@/assets/icons/moveTopBtnIcon.svg';
import MapImg from '../assets/image/djFestivalMapImg.svg';
import djFestivalBackImg1 from '../assets/image/djFestivalBackImg1.png';

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
          <img src={djFestivalBackImg1} alt="" />
        </ImgContainer2>
      </ImgWrapper>
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
  width: 100%;
  position: relative;
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 48.4rem;
  margin-top: 2rem;
  img {
    width: 33.5rem;
    height: 48.4rem;
  }
`;
const ImgContainer2 = styled.div`
  position: absolute;
  bottom: -16.5rem;
  left: -1.8rem;
  img {
    width: 23.679rem;
    height: 29.317rem;
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
