import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

TimeTable.propTypes = {
  day: PropTypes.string.isRequired,
};

function TimeTable() {
  return <Container></Container>;
}

const Container = styled.section`
  border: 1px solid black;
  width: 33.5rem;
  height: 51.9rem;
`;

export default TimeTable;
