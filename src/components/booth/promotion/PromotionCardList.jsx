import useGetPromotionBooths from '@/query/get/useGetPromotionBooths';
import PropTypes from 'prop-types';
import React from 'react';
import PromotionBoothCard from './PromotionBoothCard';

PromotionCardList.propTypes = {
  cardRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
};

export default function PromotionCardList({ cardRef }) {
  const { booths } = useGetPromotionBooths();

  booths.sort((boothPrev, boothNext) => parseInt(boothPrev.booth_num) - parseInt(boothNext.booth_num));

  return booths.map((booth) => (
    <div ref={(el) => (cardRef.current[booth.booth_num] = el)} key={booth.booth_num}>
      <PromotionBoothCard data={booth} variant="primary" />
    </div>
  ));
}
