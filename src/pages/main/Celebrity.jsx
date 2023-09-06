import { useState } from 'react';
import theme from '@/styles/theme';
import styled from 'styled-components';

import Day from '@/components/celebrity/day';
import { CelebrityData } from '@/constants/CelebrityData';
import { lineupState } from '@/libs/store';
import { useRecoilState } from 'recoil';

function Celebrity() {
  const [show, setShow] = useRecoilState(lineupState);

  const showMore = () => {
    setShow(true);
  };

  const showClose = () => {
    setShow(false);
    window.scrollTo({
      top: 2300,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <Title show={show ? 1 : 0}>라인업</Title>
      <ShowMoreButton src="/img/icon-arrow-down-small-mono.png" show={show ? 0 : 1} onClick={showMore} />
      <DayContainer show={show ? 1 : 0}>
        <Day day={`9.13 수`} info={CelebrityData.first} />
        <Day day={`9.14 목`} info={CelebrityData.second} />
        <Day day={`9.15 금`} info={CelebrityData.third} />
      </DayContainer>
      <ShowCloseButton show={show ? 1 : 0} onClick={showClose}>
        <ShowCloseIcon src="/img/icon-arrow-down-small-mono.png" />
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
  width: 100%;
  background-color: ${theme.colors.background};
`;

const Title = styled.h1`
  padding: 6rem 0 1.8rem 0;
  padding-bottom: ${(props) => (props.show ? '6rem' : '1.8rem')};
  color: ${theme.colors.white};

  ${theme.fontStyles.head1};

  text-align: center;
`;

const ShowMoreButton = styled.img`
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: 4rem;
  height: 4rem;
  margin-bottom: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

const ShowCloseIcon = styled.img`
  width: 2rem;
  height: 2rem;

  transform: rotate(180deg);
`;

const DayContainer = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
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
