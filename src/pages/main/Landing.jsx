import React from 'react';
import { styled } from 'styled-components';
import { slogan, slogan1, slogan2, slogan3, slogan4 } from '../../constants/slogan';
import theme from '../../styles/theme';

function Landing() {
  return (
    <Container>
      <Slogan>{slogan}</Slogan>
      <SloganDesc>
        <Ment>{slogan1}</Ment>
        <Ment>{slogan2}</Ment>
        <Ment>{slogan3}</Ment>
        <Ment>{slogan4}</Ment>
      </SloganDesc>
    </Container>
  );
}

export default Landing;

const Container = styled.section`
  height: 86rem;
`;

const Slogan = styled.h1`
  padding: 10rem 0 3.6rem 0;
  color: ${theme.colors.black};

  ${theme.fontStyles.head2};

  text-align: center;
  white-space: pre-line;
`;

const SloganDesc = styled.div`
  color: ${theme.colors.lightblack};

  ${theme.fontStyles.subHead2};

  text-align: center;
  white-space: pre-line;
`;

const Ment = styled.div`
  font-size: 1.6rem;
  line-height: 162.5%;

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;
