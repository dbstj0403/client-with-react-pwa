import React from 'react';
import styled from 'styled-components';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { pageState, roadmapState } from '@/libs/store';
import { useNavigate } from 'react-router-dom';
import { mapEnum } from './Roadmap/MapEnum';
import getOffset from './Roadmap/GetOffset';
import goDetail from './Roadmap/GoDetail';
import { useRef } from 'react';
import useLazyLoading from '@/hooks/useLazyLoading';

function HongikMapImage() {
  const current = useRecoilValue(roadmapState);

  const isPage = useSetRecoilState(pageState);
  const navigate = useNavigate();

  const handleSelectOptionClick = (selectedPage) => {
    isPage(selectedPage);
    navigate(`/${selectedPage}`);
  };

  // 이미지 lazy loading을 처리하기 위해
  // 이 두 줄과 Container ref props 참고하시면 됩니다~~!!
  const observerRef = useRef(null);
  const loading = useLazyLoading(observerRef);

  const imgList = [];

  // 지도
  for (let i = 0; i < 9; i++) {
    const img = {
      map: `https://storage.2023hiufestainfo.com/client/hongikmap${mapEnum[i]}.png`,
      marker: `/img/icon/${mapEnum[i]}.png`,
    };
    imgList.push(img);
  }

  return (
    <Container ref={observerRef}>
      {loading ? (
        <Skeleton src="/img/skeleton.png" />
      ) : (
        imgList.map((img, idx) => <Map key={`hongikmap-${idx}`} src={img.map} show={current === idx ? 1 : 0} />)
      )}
      {current !== 0
        ? imgList.map((img, idx) => (
            <Marker
              key={`marker-${idx}`}
              src={img.marker}
              alt="hongikIcon"
              show={current === idx ? 1 : 0}
              offset={getOffset(current)}
              onClick={() => goDetail(current, handleSelectOptionClick)}
            />
          ))
        : imgList
            .slice(1)
            .map((marker, idx) => (
              <Marker
                key={`marker-${idx}`}
                src={marker.marker}
                alt="hongikIcon"
                show={1}
                offset={getOffset(idx + 1)}
                onClick={() => goDetail(idx + 1, handleSelectOptionClick)}
              />
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

const Map = styled.img`
  position: absolute;

  z-index: ${(props) => (props.show ? 1 : -1)};
  width: 100%;
  height: 19rem;
  margin: 0 auto;
  margin-bottom: 1.6rem;

  object-fit: contain;
  object-position: center center;
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

const Skeleton = styled.img`
  width: 100%;
  height: 19rem;
  object-fit: contain;
  object-position: center center;
`;
