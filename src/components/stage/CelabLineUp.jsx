import AOS from 'aos';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

CelabLineUp.propTypes = {
  day: PropTypes.number,
};

export default function CelabLineUp({ day }) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <LineUpWrapper data-aos="fade-up" data-aos-duration="800">
      <img src={`/img/stage/lineup-day-${day}.png`} />
    </LineUpWrapper>
  );
}

const LineUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 33.5rem;

  justify-content: center;

  margin-bottom: 8rem;

  img {
    object-fit: fill;
  }
`;
