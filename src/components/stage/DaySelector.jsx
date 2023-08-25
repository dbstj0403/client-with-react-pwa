import React, { useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

DaySelector.propTypes = {
  selectedDay: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function DaySelector({ selectedDay, onClick }) {
  /** 더미 데이터 */
  const days = useMemo(
    () => [
      {
        id: 'day1',
        title: 'DAY 1',
      },
      {
        id: 'day2',
        title: 'DAY 2',
      },
      {
        id: 'day3',
        title: 'DAY 3',
      },
    ],
    []
  );

  return (
    <Container>
      {days.map((day) => (
        <Label key={day.id} highlight={day.id === selectedDay} onClick={() => onClick(day.id)}>
          {day.title}
        </Label>
      ))}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 28rem;
  margin-bottom: 2.5rem;
`;

const Label = styled.p`
  ${({ highlight }) => (highlight ? `color: #045aff;` : `color: #000;`)};
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  /* font-family: Inter; */
`;

export default DaySelector;
