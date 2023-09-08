import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import PropTypes from 'prop-types';

ProfitBoothCard.propTypes = {
  data: PropTypes.shape({
    boothNum: PropTypes.number.isRequired,
    boothName: PropTypes.string.isRequired,
    host: PropTypes.string,
    intro: PropTypes.string,
  }),
  variant: PropTypes.string.isRequired,
};

export default function ProfitBoothCard({ data, variant }) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <CardWrapper data-aos="fade-up" data-aos-duration="800">
      <BoothText>
        <BoothNumber>
          <span>{data.boothNum}</span>
        </BoothNumber>
        <BoothName variant={variant}>
          <span>{data.boothName}</span>
        </BoothName>
        <BoothHosted>
          <span>{data.host}</span>
        </BoothHosted>
        <BoothIntroduction>{data.intro}</BoothIntroduction>
      </BoothText>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 33.5rem;
  height: 20.4rem;

  margin-bottom: 3.6rem;

  background-color: #000;
`;

const BoothText = styled.div`
  padding: 1.8rem 2rem;
`;

const BoothNumber = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;
  span {
    ${(props) => props.theme.fontStyles.subHead1};
    line-height: 1.6rem;
    color: ${(props) => props.theme.colors.black};
  }
`;

const BoothName = styled.div`
  span {
    color: ${(props) => (props.variant === 'primary' ? props.theme.colors.green : props.theme.colors.pink)};
    ${(props) => props.theme.fontStyles.head5};
  }
`;

const BoothHosted = styled.div`
  margin-bottom: 0.8rem;
  span {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fontStyles.subHead2};
  }
`;

const BoothIntroduction = styled.p`
  color: rgba(255, 255, 255, 0.8);
  ${(props) => props.theme.fontStyles.subHead1}
  font-weight:400;
  padding: 1.2rem 0;
  border-top: 1px solid transparent;
  border-image: linear-gradient(to right, white, black);
  border-image-slice: 1;
`;
