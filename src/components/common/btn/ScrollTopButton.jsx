import theme from '@/styles/theme';
import React from 'react';
import styled from 'styled-components';
import { MapIcon } from '../icon';

function ScrollTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Button onClick={scrollToTop}>
      <MapIcon />
      <Label>맨 위로</Label>
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  bottom: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 11.2rem;
  height: 4.8rem;
  gap: 0.6rem;

  border-radius: 4rem;
  background: ${theme.colors.black};
`;

const Label = styled.p`
  color: ${theme.colors.white};
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
`;

export default ScrollTopButton;
