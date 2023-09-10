import useGetPromotionBooths from '@/query/get/useGetPromotionBooths';
import PropTypes from 'prop-types';
import React from 'react';
import PromotionBoothCard from './PromotionBoothCard';

PromotionCardList.propTypes = {
  cardRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
};

export default function PromotionCardList({ cardRef }) {
  const { booths } = useGetPromotionBooths();

  return booths.map((booth, index) => (
    <div ref={(el) => (cardRef.current[index + 1] = el)} key={index + 1}>
      <PromotionBoothCard index={index + 1} data={booth} variant="primary" />
    </div>
  ));
}
