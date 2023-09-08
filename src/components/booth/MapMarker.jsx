import React from 'react';
import styled from 'styled-components';

export default function MapMarker({ booths, markers, onClick }) {
  const markerInformations = markers.map((marker, index) => ({
    ...marker,
    number: booths[index].boothNum,
  }));
  return markerInformations.map((info) => (
    <Pointer
      key={`pointer${info.number}`}
      number={info.number}
      left={info.left}
      top={info.top}
      onClick={() => onClick(info.number)}
    />
  ));
}

const Pointer = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  ${({ left, top }) => `left: ${left}; top:${top};`}
  background-image: ${({ number }) => `url(/img/booth/pointer${number}.png)`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  cursor: pointer;
`;
