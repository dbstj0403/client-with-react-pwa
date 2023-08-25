import React, { useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

TimeTable.propTypes = {
  day: PropTypes.string.isRequired,
};

function TimeTable() {
  /** 더미 데이터 */
  const schedules = useMemo(
    () => [
      { time: '18:00 ~ 20:00', stages: ['학생중앙무대 1', '학생중앙무대 2', '학생중앙무대 3'] },
      { time: '20:00 ~ 22:00', stages: ['연예인 초청무대1', '연예인 초청무대2', '연예인 초청무대3'] },
    ],
    []
  );

  return (
    <Container>
      <Title>(일정 시간표 타임테이블)</Title>
      {schedules.map((schedule) => (
        <Schedule key={schedule.time}>
          <TimeLine>{schedule.time}</TimeLine>
          <Stages>
            {schedule.stages.map((stage) => (
              <Stage key={stage}>{stage}</Stage>
            ))}
          </Stages>
        </Schedule>
      ))}
    </Container>
  );
}

const Container = styled.section`
  width: 29.6rem;

  background-color: #f4f4f4;

  padding: 1.2rem 2rem;
`;

const Title = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-bottom: 2rem;
`;

const Schedule = styled.ul`
  display: flex;

  margin-bottom: 0.5rem;
`;

const TimeLine = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  min-width: 9.1rem;
  margin-right: 1.2rem;
`;

const Stages = styled.ul`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  min-height: 7.8rem;
`;

const Stage = styled.li`
  color: #000;

  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default TimeTable;
