import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';

DaySelector.propTypes = {
  selectedDay: PropTypes.string.isRequired,
};

function DaySelector({ selectedDay }) {
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
      {days.map((day, index) => (
        <Label key={day.id} selected={index === selectedDay}>
          {day.title} {index === selectedDay && day.date}
        </Label>
      ))}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 999;

  width: 33.5rem;
  margin-top: 6rem;
  margin-bottom: 4.8rem;
`;

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fontStyles.body1}

  ${({ selected, theme }) =>
    selected
      ? `
      width: 15.8rem;
      height: 4.4rem;

      color: ${theme.colors.white};

      transition: width 0.3s ease;
      border-radius: 4.8rem;
      background: rgba(30, 30, 30, 0.7);
      backdrop-filter: blur(6px);
      `
      : `
      width: 6rem;
      
      color: ${theme.colors.gray200};
  `};
`;

export default DaySelector;
