import React from 'react';
import styled from 'styled-components';

function HongikMapImage(props) {
  const mapEnum = {
    0: '',
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'G',
    7: 'F',
  };

  const imgSrc = `/img/hongikmap${mapEnum[props.index]}.png`;
  return (
    <>
      <HongikMap src={imgSrc} alt="hongikmap" />
    </>
  );
}

export default HongikMapImage;

const HongikMap = styled.img`
  width: 100%;
  height: 19rem;
  margin-bottom: 1.6rem;
  object-fit: contain;
`;
