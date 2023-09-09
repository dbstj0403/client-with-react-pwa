import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { pageState, roadmapState } from '@/libs/store';
import { useNavigate } from 'react-router-dom';

function HongikMapImage() {
  const isPage = useSetRecoilState(pageState);
  const current = useRecoilValue(roadmapState);

  const navigate = useNavigate();

  const handleSelectOptionClick = (selectedPage) => {
    isPage(selectedPage);
    navigate(`/${selectedPage}`);
  };

  const mapEnum = {
    0: '',
    1: 'A',
    2: 'B',
    3: 'G',
    4: 'C',
    5: 'D',
    6: 'E',
    7: 'H',
    8: 'F',
  };

  const getOffset = (current) => {
    switch (current) {
      case 1:
        return { top: 'calc(50% - 8rem)', left: 'calc(50% - 1.2rem)', size: '2rem' };
      case 2:
        return { top: 'calc(50% + 1.5rem)', left: 'calc(50% - 7rem)', size: '2rem' };
      case 3:
        return { top: 'calc(50% - 4rem)', left: 'calc(50%)', size: '2.3rem' };
      case 4:
        return { top: 'calc(50%)', left: 'calc(50% - 3rem)', size: '2rem' };
      case 5:
        return { top: 'calc(50% + 1rem)', left: 'calc(50% + 2rem)', size: '2rem' };
      case 6:
        return { top: 'calc(50% - 4.5rem)', left: 'calc(50% - 7.8rem)', size: '2rem' };
      case 7:
        return { top: 'calc(50% - 0.7rem)', left: 'calc(50% - 14.5rem)', size: '2rem' };
      case 8:
        return { top: 'calc(50% + 1.5rem)', left: 'calc(50% + 10.7rem)', size: '2.2rem' };
    }
  };

  const imgList = [];

  // 지도
  for (let i = 0; i < 9; i++) {
    const img = { map: `/img/hongikmap/hongikmap${mapEnum[i]}.png`, marker: `/img/icon/${mapEnum[i]}.png` };
    imgList.push(img);
  }

  // 어디로 링크를 넣어줄 지만 정하면 끝
  const goDetail = (current) => {
    switch (current) {
      case 1:
        handleSelectOptionClick('booth/profit');
        break;
      case 2:
        handleSelectOptionClick('stage');
        break;
      case 3:
        handleSelectOptionClick('entrance');
        break;
      case 4:
        handleSelectOptionClick('hongikzone');
        break;
      case 5:
        handleSelectOptionClick('booth/pub');
        break;
      case 6:
        handleSelectOptionClick('booth/foodtruck');
        break;
      case 7:
        handleSelectOptionClick('facilities');
        break;
      case 8:
        handleSelectOptionClick('wowdjfestival');
        break;
    }
  };

  return (
    <Container>
      {imgList.map((img, idx) => (
        <Map key={`hongikmap-${idx}`} img={img.map} show={current === idx ? 1 : 0}>
          {current !== 0 ? (
            <Marker
              src={img.marker}
              alt="hongikIcon"
              show={current === idx}
              offset={getOffset(current)}
              onClick={() => goDetail(current)}
            />
          ) : (
            imgList
              .slice(1)
              .map((marker, idx) => (
                <Marker
                  key={`marker-${idx}`}
                  src={marker.marker}
                  alt="hongikIcon"
                  show={1}
                  offset={getOffset(idx + 1)}
                  onClick={() => goDetail(idx + 1)}
                />
              ))
          )}
        </Map>
      ))}
    </Container>
  );
}

export default HongikMapImage;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 19rem;
`;

const Map = styled.div`
  position: absolute;

  z-index: ${(props) => (props.show ? 1 : -1)};
  width: 100%;
  height: 19rem;
  margin: 0 auto;
  margin-bottom: 1.6rem;

  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Marker = styled.img`
  position: absolute;
  z-index: ${(props) => (props.show ? 2 : -1)};

  top: ${(props) => props.offset.top};
  left: ${(props) => props.offset.left};
  z-index: 3;
  width: ${(props) => props.offset.size};
  opacity: 0;

  &:hover {
    cursor: pointer;
  }
`;
