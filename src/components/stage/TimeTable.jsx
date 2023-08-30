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
          time: '18:00 ~ 20:00',
          stages: ['학생중앙무대 1', '학생중앙무대 2', '학생중앙무대 3'],
        },
        { time: '20:00 ~ 22:00', stages: ['연예인 초청무대1', '연예인 초청무대2', '연예인 초청무대3'] },
        { time: '22:00 ~ 00:00', stages: ['연예인 초청무대1', '연예인 초청무대2', '연예인 초청무대3'] },
      ],
      [
        {
          id: 'day2',
          time: '16:00 ~ 20:00',
          stages: ['학생중앙무대 1', '학생중앙무대 3', '학생중앙무대 3'],
        },
        { time: '20:00 ~ 22:00', stages: ['연예인 초청무대1', '연예인 초청무대3'] },
        { time: '22:00 ~ 00:00', stages: ['연예인 초청무대1', '연예인 초청무대2'] },
      ],
      [
        {
          id: 'day3',
          time: '12:00 ~ 20:00',
          stages: ['학생중앙무대 1', '학생중앙무대 2', '학생중앙무대 3'],
        },
        { time: '20:00 ~ 22:00', stages: ['연예인 초청무대1', '연예인 초청무대2', '연예인 초청무대3'] },
        { time: '22:00 ~ 00:00', stages: ['연예인 초청무대1', '연예인 초청무대2', '연예인 초청무대3'] },
      ],
    ],
    []
  );

  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    rows: 3,
  };

  return (
    <Container {...settings} onSwipe={onSwipe} initialSlide={day}>
      {schedules.map((day) =>
        day.map((schedule, index) => (
          <>
            <Schedule key={schedule.time}>
              <TimeLine>
                <span id="index">{index + 1}</span>
                <span>{schedule.time}</span>
              </TimeLine>
              <Stages>
                {schedule.stages.map((stage) => (
                  <Stage key={stage}>{stage}</Stage>
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
  display: flex;

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
