import theme from '@/styles/theme';
import React from 'react';
import styled from 'styled-components';

function HorizontalLine(props) {
  return <Line {...props} />;
}

const Line = styled.hr`
  width: 33.5rem;
  border: 1px solid ${theme.colors.lightgray};
`;

export default HorizontalLine;
