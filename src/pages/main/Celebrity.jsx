import { useState } from 'react';
import theme from '@/styles/theme';
import styled from 'styled-components';

import Day from '@/components/celebrity/day';
import { CelebrityData } from '@/constants/CelebrityData';
import { lineupState } from '@/libs/store';
import { useRecoilState } from 'recoil';
import { dayColor } from '@/constants/DayColor';
import ArrowDown from '@/assets/icons/ArrowDown';
import ArrowUp from '@/assets/icons/ArrowUp';

function Celebrity() {
  const [show, setShow] = useRecoilState(lineupState);

  const getScrollTo = () => {
    if (window.innerWidth < 450) {
      return 2300;
    } else if (window.innerWidth < 600) {
      return 3100;
    } else {
      return 3900;
    }
  };

  const showMore = () => {
    setShow(true);
  };

  const showClose = () => {
    setShow(false);
    window.scrollTo({
      top: getScrollTo(),
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <Gradient show={show ? 1 : 0} />
      <Title show={show ? 1 : 0}>라인업</Title>
      <ShowMoreButton show={show ? 0 : 1} onClick={showMore}>
        <ArrowDown />
      </ShowMoreButton>
      <DayContainer show={show ? 1 : 0}>
        <Day day={`9.13 수`} color={dayColor[0]} info={CelebrityData.first} />
        <Day day={`9.14 목`} color={dayColor[1]} info={CelebrityData.second} />
        <Day day={`9.15 금`} color={dayColor[2]} info={CelebrityData.third} />
      </DayContainer>
      <ShowCloseButton show={show ? 1 : 0} onClick={showClose}>
        <ArrowUp />
        접어두기
      </ShowCloseButton>
    </Container>
  );
}

export default Celebrity;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  background-color: ${theme.colors.background};
`;

const Gradient = styled.div`
  display: ${(props) => (!props.show ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 24rem;
  background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 100%);
`;

const Title = styled.h1`
  position: relative;
  z-index: 2;
  padding: 6rem 0 1.8rem 0;
  padding-bottom: ${(props) => (props.show ? '8.8rem' : '2.8rem')};
  color: ${theme.colors.white};

  ${theme.fontStyles.head1};

  text-align: center;
`;

const ShowMoreButton = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: relative;
  z-index: 2;
  margin-bottom: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

const DayContainer = styled.div`
  height: ${(props) => (props.show ? 'auto' : '7rem')};
  overflow: hidden;
  padding: 0 2rem;
`;

const ShowCloseButton = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;

  width: 12.2rem;
  height: 4.8rem;

  padding: 1.2rem 2rem;

  color: ${theme.colors.white};
  ${theme.fontStyles.subHead1};

  &:hover {
    cursor: pointer;
  }
`;
