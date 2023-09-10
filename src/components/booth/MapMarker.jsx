import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

MapMarker.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      top: PropTypes.string.isRequired,
      left: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func,
};

export default function MapMarker({ markers, onClick }) {
  return markers.map((info) => (
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
