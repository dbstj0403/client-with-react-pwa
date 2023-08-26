import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

DaySelector.propTypes = {
  selectedDay: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function DaySelector({ selectedDay, onClick }) {
  const [days] = useState(() => {
    return [
      {
        id: 'day1',
        title: 'Day 1',
        date: '9.13(수)',
      },
      {
        id: 'day2',
        title: 'Day 2',
        date: '9.14(목)',
      },
      {
        id: 'day3',
        title: 'Day 3',
        date: '9.15(금)',
      },
    ];
  });

  return (
    <Container>
      {days.map((day) => (
        <Label key={day.id} highlight={day.id === selectedDay} onClick={() => onClick(day.id)}>
          {day.title} {day.id === selectedDay && day.date}
        </Label>
      ))}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 33.5rem;
  margin-bottom: 3.6rem;
`;

const Label = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.8rem;
  font-family: Pretendard;
  font-style: normal;

  ${({ highlight }) =>
    highlight
      ? `
      color: #ECECEC;
      font-weight: 400;
      width: 15.6rem;
      height: 3.4rem;
      transition: width 0.3s ease;
      border-radius: 4.8rem;
      background: #0075ff;
      `
      : `
      width: 6rem;
      color: #BEBEBE;
      
      font-weight: 500;
  `};
`;

export default DaySelector;
