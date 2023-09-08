import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { pageState, roadmapState } from '@/libs/store';

function HongikMapImage() {
  const isPage = useSetRecoilState(pageState);
  const current = useRecoilValue(roadmapState);

  const handleSelectOptionClick = (selectedPage) => {
    isPage(selectedPage);
    window.location.replace(`/${selectedPage}`);
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
        return { top: '1.57rem', left: '15.71rem', size: '2rem' };
      case 2:
        return { top: '11rem', left: '10rem', size: '2rem' };
      case 3:
        return { top: '5.3rem', left: '16.5rem', size: '2.3rem' };
      case 4:
        return { top: '9.57rem', left: '13.71rem', size: '2rem' };
      case 5:
        return { top: '10.15rem', left: '19.05rem', size: '2rem' };
      case 6:
        return { top: '4.6rem', left: '8.8rem', size: '2rem' };
      case 7:
        return { top: '8.76rem', left: '2.51rem', size: '2rem' };
      case 8:
        return { top: '10.5rem', left: '27.45rem', size: '2.2rem' };
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
        <Map img={img.map} show={current === idx}>
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

/**(
            <Marker src={img.marker} alt="hongikPin" offset={getOffset(idx + 1)} onClick={goDetail} />
          ) */

export default HongikMapImage;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 19rem;
`;

const Map = styled.div`
  position: absolute;

  z-index: ${(props) => (props.show ? 1 : -1)};
  max-width: 33.7rem;
  width: 33.7rem;
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
