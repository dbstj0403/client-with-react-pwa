import { adminState } from '@/libs/store';
import useGetProfitBooths from '@/query/get/useGetProfitBooths';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import AddProfitBoothCard from './AddProfitBoothCard';
import ProfitBoothCard from './ProfitBoothCard';

ProfitCardList.propTypes = {
  cardRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
};

export default function ProfitCardList({ cardRef }) {
  const { booths } = useGetProfitBooths();
  const isAdmin = useRecoilValue(adminState);
  const [addCard, setAddCard] = useState(false);

  booths.sort((boothPrev, boothNext) => parseInt(boothPrev.boothNum) - parseInt(boothNext.boothNum));

  return (
    <Wrapper>
      {isAdmin && (
        <AddButton onClick={() => setAddCard(true)}>
          <span>부스 추가</span>
          <span id="plus">+</span>
        </AddButton>
      )}
      {addCard && <AddProfitBoothCard closeForm={() => setAddCard(false)} />}

      {booths.map((booth) => (
        <div ref={(el) => (cardRef.current[booth.booth_num] = el)} key={booth.booth_num}>
          <ProfitBoothCard data={booth} variant="primary" />
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
