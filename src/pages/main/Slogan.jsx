import React from 'react';
import styled from 'styled-components';
import { slogan2, slogan3, slogan4 } from '@/constants/slogan';
import theme from '@/styles/theme';

function Slogan() {
  return (
    <Container>
      <TopImage />
      <Text>{slogan2}</Text>
      <Text>{slogan3}</Text>
      <Text>{slogan4}</Text>
      <BottomImage />
    </Container>
  );
}

export default Slogan;

const Container = styled.section`
  position: relative;
  height: 68rem;
  padding: 15rem 3.4rem;

  overflow: hidden;
`;

const Text = styled.div`
  color: ${theme.colors.gray200};

  ${theme.fontStyles.body1};

  text-align: center;
  white-space: pre-line;

  &:not(:last-child) {
    margin-bottom: 3.6rem;
  }
`;

const TopImage = styled.div`
  position: absolute;
  top: 6.2rem;
  right: -10rem;

  width: 24.7rem;
  height: 30.8rem;
  transform: rotate(-60deg);

  background: url('/img/main-background.png') center center no-repeat;
  background-blend-mode: hard-light;
`;

const BottomImage = styled.div`
  position: absolute;

  bottom: -12rem;
  left: -13rem;

  width: 20.65rem;
  height: 25.74rem;

  background: url('/img/main-background.png') center center no-repeat;
  background-blend-mode: exclusion;
  filter: blur(0.6rem);
  transform: rotate(180deg);
`;
