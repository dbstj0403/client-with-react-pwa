import React from 'react';
import { styled } from 'styled-components';
import { slogan, slogan1, slogan2, slogan3, slogan4 } from './../../constants/slogan';
import theme from './../../style/theme';

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

  font-family: 'Pretendard';
  font-size: ${theme.fontsize.title};
  font-weight: 600;
  line-height: 131.25%;

  text-align: center;
  white-space: pre-line;
`;

const SloganDesc = styled.div`
  color: ${theme.colors.lightblack};

  font-family: 'Pretendard';
  font-size: ${theme.fontsize.paragraph};
  font-weight: 600;

  line-height: 162.5%;
  text-align: center;
  white-space: pre-line;
`;

const Ment = styled.div`
  &:first-child {
    color: ${theme.colors.black};
    font-weight: 500;
  }

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;
