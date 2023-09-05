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
  height: 62rem;
  padding: 15rem 0 15rem 0;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.91) 16.43%, #000 100%);
  backdrop-filter: blur(0.4rem);
`;

const TopImage = styled.div`
  position: absolute;
  top: 6.2rem;
  right: -10rem;
  z-index: -1;

  width: 24.7rem;
  height: 30.8rem;
  transform: rotate(-60deg);

  background: url('/img/main-background.png') center center no-repeat;
  background-blend-mode: hard-light;
`;

const Text = styled.div`
  padding: 0 3.4rem;
  color: ${theme.colors.gray200};

  ${theme.fontStyles.body1};

  text-align: center;
  white-space: pre-line;

  &:not(:last-child) {
    margin-bottom: 3.6rem;
  }
`;

const BottomImage = styled.div`
  position: absolute;

  bottom: -10rem;
  left: -6rem;

  width: 20.65rem;
  height: 25.74rem;

  background: url('/img/page8.png') center center no-repeat;
`;
