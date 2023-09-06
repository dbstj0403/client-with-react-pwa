import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { pageState } from '@/libs/store';

function HongikMapImage(props) {
  const isPage = useSetRecoilState(pageState);

  const handleSelectOptionClick = (selectedPage) => {
    isPage(selectedPage);
    window.location.replace(`${selectedPage}`);
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

  const getOffset = () => {
    switch (props.index) {
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

  const imgSrc = `/img/hongikmap/hongikmap${mapEnum[props.index]}.png`;
  const markerSrc = `/img/icon/${mapEnum[props.index]}.png`;

  // 어디로 링크를 넣어줄 지만 정하면 끝
  const goDetail = () => {
    switch (props.index) {
      case 1:
        handleSelectOptionClick('/');
        break;
      case 2:
        handleSelectOptionClick('/');
        break;
      case 3:
        handleSelectOptionClick('/');
        break;
      case 4:
        handleSelectOptionClick('/');
        break;
      case 5:
        handleSelectOptionClick('/');
        break;
      case 6:
        handleSelectOptionClick('/');
        break;
      case 7:
        handleSelectOptionClick('/');
        break;
      case 8:
        handleSelectOptionClick('/');
        break;
    }
  };

  return (
    <Container>
      <Map img={imgSrc}>
        {props.index !== 0 ? <Marker src={markerSrc} alt="hongikIcon" offset={getOffset()} onClick={goDetail} /> : null}
      </Map>
    </Container>
  );
}

export default HongikMapImage;

const Container = styled.div`
  width: 100%;
`;

// 이미지를 아에 반응형으로 하지않고 고정시켜버리면
// 마커의 위치 문제가 사라지는데 고민....
// 이미지가 커지면서 마커가 위치를 잡지 못하는 버그가 있음.
const Map = styled.div`
  position: relative;
  max-width: 33.7rem;
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
  top: ${(props) => props.offset.top};
  left: ${(props) => props.offset.left};
  z-index: 3;
  width: ${(props) => props.offset.size};

  &:hover {
    cursor: pointer;
  }
`;
