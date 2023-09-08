import AOS from 'aos';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

CelabLineUpItem.propTypes = {
  size: PropTypes.shape({
    day: PropTypes.number,
    height: PropTypes.string,
  }),
};

export default function CelabLineUpItem({ size }) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <LineUpWrapper data-aos="fade-up" data-aos-duration="800">
      <LineUp day={size.day} height={size.height} />
    </LineUpWrapper>
  );
}

const LineUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8rem;
`;

const LineUp = styled.div`
  width: 33.5rem;
  height: ${({ height }) => height};

  ${({ day }) => `background-image: url(/img/stage/lineup-day${day}.png);`}
  background-size: contain;
  background-repeat: no-repeat;
`;
