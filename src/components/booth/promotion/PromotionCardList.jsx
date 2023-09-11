import { adminState } from '@/libs/store';
import useGetPromotionBooths from '@/query/get/useGetPromotionBooths';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import AddPromotionBoothCard from './AddPromotionBoothCard';
import PromotionBoothCard from './PromotionBoothCard';

PromotionCardList.propTypes = {
  cardRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
};

export default function PromotionCardList({ cardRef }) {
  const { booths } = useGetPromotionBooths();
  const isAdmin = useRecoilValue(adminState);

  const [addCard, setAddCard] = useState(false);
  booths.sort((boothPrev, boothNext) => parseInt(boothPrev.booth_num) - parseInt(boothNext.booth_num));

  return (
    <Wrapper>
      {isAdmin && (
        <AddButton onClick={() => setAddCard(true)}>
          <span>부스 추가</span>
          <span id="plus">+</span>
        </AddButton>
      )}
      {addCard && <AddPromotionBoothCard closeForm={() => setAddCard(false)} />}

      {booths.map((booth) => (
        <div ref={(el) => (cardRef.current[booth.booth_num] = el)} key={booth.name}>
          <PromotionBoothCard data={booth} variant="primary" />
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const AddButton = styled.button`
  display: flex;

  margin-left: auto;

  ${({ theme }) => `
    span {
      color: ${theme.colors.white};
      ${theme.fontStyles.subHead1};

    }
    span#plus {
      margin-left: 0.4rem;
      color: ${theme.colors.green};
    }
  `}

  margin-bottom: 1.6rem;
`;
