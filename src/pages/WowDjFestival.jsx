import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import InfoCard from '@/components/wowDj/InfoCard';
import LineUp from '@/components/wowDj/LineUp';

import backgroundImg1 from '../assets/image/FestivalBackground.svg';
import backgroundImg2 from '../assets/image/InfoCardBackground.svg';
import MoveToTopBtn from '@/components/common/btn/MoveToTopBtn';
import wdfPoster from '../../public/img/dj/wdfPoster.png';
import wdfMap from '../../public/img/dj/wdfMap.png';

import { useRecoilState } from 'recoil';
import { pageState } from '@/libs/store';

function WowDigitalFestival() {
  const [isAuth, setIsAuth] = useState(false);

  const [page, isPage] = useRecoilState(pageState);

  useEffect(() => {
    isPage('wowdjfestival');
  }, []);

  return (
    <Container>
      <Title>와우 디제이 페스티벌</Title>
      <TitleInfo>
        와우 디제이 페스티벌은 <br />
        다양한 매력을 가진 DJ들이 찾아와 자신만의 <br />
        음악을 사람들과 즐기는 페스티벌입니다. <br />
        다양한 컨텐츠가 준비되어 있으니 <br />
        많은 관심 부탁드립니다.
      </TitleInfo>

      <ImgWrapper>
        <ImgContainer>
          <img src={wdfPoster} alt="" />
        </ImgContainer>
        <ImgContainer1>
          <img src={wdfMap} alt="" />
        </ImgContainer1>
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
        <ImgContainer5>
          <img src={backgroundImg2} alt="" />
        </ImgContainer5>
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
  margin-bottom: 10rem;
  margin: 0 auto;
  margin-bottom: 3.5rem;
  position: relative;
  z-index: 5;
  img {
    width: 33.5rem;
    height: 48.4rem;
  }
`;
const ImgContainer1 = styled.div`
  width: 33.5rem;
  height: 48.4rem;
  margin-top: 2rem;
  margin: 0 auto;
  margin-bottom: 3rem;
  position: relative;
  z-index: 5;
  img {
    width: 33.5rem;
    height: 33.5rem;
  }
`;
const ImgContainer2 = styled.div`
  position: absolute;
  bottom: 31rem;
  left: -5rem;
  width: 50rem;
  height: 40rem;
  z-index: 2;
  img {
    width: 23.679rem;
    height: 29.317rem;
  }
`;
const ImgContainer3 = styled.div`
  position: absolute;
  bottom: 40rem;
  left: 15rem;
  z-index: 2;
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
const ImgContainer5 = styled.div`
  position: absolute;
  top: 14rem;
  left: 6rem;
  z-index: 2;
  img {
    width: 38.8rem;
    height: 34.4rem;
    transform: rotate(-40deg);

    //transform: scaleX(-1);
    //mix-blend-mode: exclusion;
  }
`;
