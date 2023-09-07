import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

TimeTable.propTypes = {
  day: PropTypes.number.isRequired,
  onSwipe: PropTypes.func.isRequired,
};

function TimeTable({ day, onSwipe }) {
  /** 더미 데이터 */
  const schedules = useMemo(
    () => [
      [
        {
          id: 'day1',
          stage: '학생중앙무대',
          details: ['유형준', '카이저', '비너스', '익수', '프링글스', '블랙테트라'],
        },
        { stage: '학부찬조공연', details: ['공연예술학부 밴드'] },
        { stage: '연예인 초청무대', details: ['10cm', '유다빈밴드', '윤하'] },
        { stage: '', details: [] },
      ],
      [
        {
          id: 'day2',
          stage: '재주꾼선발대회',
          details: ['유지예', '나중에', '샹이니빛이나는솔로', '권영훈', '전자깡패', '에땅쎌', '김예린', '이민규'],
        },
        { stage: '학부찬조공연', details: ['공연예술학부 뮤지컬'] },
        { stage: '연예인 초청무대', details: ['양다일', '나비', 'SURL', '비비', '타이거JK', '윤미래'] },
        { stage: '', details: [] },
      ],

      [
        {
          id: 'day3',
          stage: '학생중앙무대',
          details: ['조용찬', '캐드', '강은서밴드', '오픈런', '소리얼', '오현성콰트로치즈와퍼', '브레인스워즈'],
        },
        { stage: '연예인 초청무대', details: ['NewJeans'] },
        { stage: '학생중앙무대', details: ['비츠플로우'] },
        { stage: '연예인 초청무대', details: ['정용화', '이승윤', '릴보이'] },
      ],
    ],

    []
  );

  const settings = {
    dots: false,
    arrows: false,
    rows: 4,
    fade: true,
  };

  return (
    <Container {...settings} onSwipe={onSwipe} initialSlide={day}>
      {schedules.map((day) =>
        day.map((schedule, index) => (
          <>
            <Schedule key={schedule.stage} isEmpty={schedule.stage === ''}>
              <TimeLine>
                <span id="index">{index + 1}</span>
                <span>{schedule.stage}</span>
              </TimeLine>
              <Stages>
                {schedule.details.map((detail) => (
                  <Stage key={detail}>{detail}</Stage>
                ))}
              </Stages>
            </Schedule>
          </>
        ))
      )}
    </Container>
  );
}

const Container = styled(Slider)`
  z-index: 2;

  width: 33.5rem;
  min-height: 51.9rem;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);

  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Schedule = styled.ul`
  display: ${({ isEmpty }) => (isEmpty ? 'none' : 'flex')};

  justify-content: space-around;
  padding: 1.4rem 0.8rem;

  margin-bottom: 1rem;

  ${({ theme }) => `
    &:first-child{
        border-top: 1px solid ${theme.colors.gray800};
        border-bottom-width: 0;
    }
    border-top: 1px solid ${theme.colors.gray800};
    border-bottom: 1px solid ${theme.colors.gray800};
  `};
`;

const TimeLine = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 13.1rem;
  height: 3.2rem;

  span {
    color: ${({ theme }) => theme.colors.gray400};
    ${({ theme }) => theme.fontStyles.body4};
  }

  span#index {
    color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fontStyles.head5};
  }
`;

const Stages = styled.ul`
  display: flex;
  flex-direction: column;

  padding-top: 0.6rem;

  width: 16rem;
  min-height: 7.8rem;
`;

const Stage = styled.li`
  ${({ theme }) => theme.fontStyles.body4};
  margin-bottom: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default TimeTable;
