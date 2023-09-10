import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import PropTypes from 'prop-types';
import EditingPromotionBoothCard from './EditingPromotionBoothCard';

PromotionBoothCard.propTypes = {
  index: PropTypes.number.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    introduction: PropTypes.string,
  }),
  variant: PropTypes.string.isRequired,
};

/**
 * @param {number} index: api response에 프로모션 부스 번호가 없기 때문에 배열 인덱스를 통해 번호 부여
 * @param {object} data: propTypes 참고
 * @param {string} variant: primary - 초록색 secondary - 붉은색
 */
export default function PromotionBoothCard({ index, data, variant }) {
  useEffect(() => {
    AOS.init();
  });

  const isAdmin = true;

  return isAdmin ? (
    <EditingPromotionBoothCard data={data} />
  ) : (
    <CardWrapper data-aos="fade-up" data-aos-duration="800">
      <BoothText>
        <BoothNumber>
          <span>{index}</span>
        </BoothNumber>
        <BoothName variant={variant}>
          <span>{data.name}</span>
        </BoothName>
        <BoothIntroduction>운영요일: {data.introduction}</BoothIntroduction>
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

const BoothIntroduction = styled.p`
  color: rgba(255, 255, 255, 0.8);
  ${(props) => props.theme.fontStyles.subHead1}
  font-weight:400;
  padding: 1.2rem 0;
  border-top: 1px solid transparent;
  border-image: linear-gradient(to right, white, black);
  border-image-slice: 1;
`;
