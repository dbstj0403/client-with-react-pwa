import { pageState } from '@/libs/store';
import theme from '@/styles/theme';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

function HongikZone() {
  const [page, isPage] = useRecoilState(pageState);

  useEffect(() => {
    isPage('hongikzone');
  }, []);

  return (
    <MainSection>
      <Title>홍익존</Title>
      <Map />
      <MapGuide>
        <PinIcon />
        <InfoWrapper>
          <InfoParagraph>
            해당 구역은 <Underline>홍익대학교 학생</Underline>들만 입장 가능한
          </InfoParagraph>
          <InfoParagraph>구역입니다.</InfoParagraph>
        </InfoWrapper>
      </MapGuide>
      <Detail />
    </MainSection>
  );
}

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10rem 2rem;
`;

const Title = styled.p`
  text-align: center;
  ${theme.fontStyles.head1};
`;

const PhotoSize = styled.div`
  width: 33.5rem;
  height: 20rem;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Detail = styled(PhotoSize)`
  background-image: url('img/hongikzone/hongikzone-detail.jpg');

  margin-top: 6rem;
  margin-bottom: 28rem;
`;
const Map = styled(PhotoSize)`
  background-image: url('img/hongikzone/hongikzone-map.png');

  margin-top: 3.6rem;
  margin-bottom: 3.3rem;
`;

const MapGuide = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 33.5rem;
  height: 8rem;

  padding: 1.8rem 2rem;

  border-radius: 1px;

  background: rgb(16, 16, 16);
  backdrop-filter: blur(4px);
  opacity: 0.9;
`;

const PinIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('img/icon-pin-location-mono.png');
`;

const InfoWrapper = styled.div``;

const InfoParagraph = styled.p`
  ${({ theme }) => theme.fontStyles.body3};
`;

const Underline = styled.span`
  text-decoration: underline;
  ${({ theme }) => theme.fontStyles.body3};
`;

export default HongikZone;
