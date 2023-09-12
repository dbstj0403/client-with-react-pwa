import MoveToTopBtn from '@/components/common/btn/MoveToTopBtn';
import { CelabLineUpList, DaySelector, TimeTable, WristbandsInfo } from '@/components/stage';
import { pageState } from '@/libs/store';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

function CentralStage() {
  const isPage = useSetRecoilState(pageState);

  const [schedulePageIconRotateSize, setRotate] = useState(0);

  const sliderRef = useRef();

  useEffect(() => {
    isPage('stage');
  }, []);

  /** 축제 시작 날짜 */
  const festivalStartDate = useMemo(() => Math.floor(new Date('2023-09-07').getTime() / 1000.0), []);

  const [day, setDay] = useState(() => {
    const todayDate = new Date();

    /** getTime()은 UTC 기준이므로 TimezoneOffset을 통해 GMT에 해당하는 초를 구한다. */
    const todaySeconds = Math.floor(new Date().getTime() / 1000.0) - todayDate.getTimezoneOffset() * 60;

    /** 축제 시작일을 seconds로 환산한 것을 기준으로 현재 시각을 초로 나타낸 것의 차이를 구한다. */
    const currentDays = (todaySeconds - festivalStartDate) / 86400;

    if (currentDays < 1) {
      setRotate(-30);
      return 0;
    }
    if (currentDays < 2) {
      setRotate(0);
      return 1;
    }
    if (currentDays < 3) {
      setRotate(30);
      return 2;
    } else {
      return 'Finished';
    }
  });

  const onSwipe = (direction) => {
    switch (direction) {
      case 'right':
        setDay((prev) => {
          if (prev === 0) {
            setRotate(30);
            return 2;
          } else {
            setRotate((prev) => prev - 30);
            return prev - 1;
          }
        });

        break;
      case 'left':
        setDay((prev) => {
          if (prev === 2) {
            setRotate(-30);
            return 0;
          } else {
            setRotate((prev) => prev + 30);
            return prev + 1;
          }
        });
        break;
      default:
        break;
    }
  };

  /** Day 선택에 따른 이미지 회전률 설정 및 선택 날짜 설정 */
  const onClickDay = (day) => {
    switch (day) {
      case 'day1':
        sliderRef.current.slickGoTo(0);
        setRotate(-30);
        setDay(0);
        break;
      case 'day2':
        sliderRef.current.slickGoTo(1);
        setRotate(0);
        setDay(1);
        break;
      case 'day3':
        sliderRef.current.slickGoTo(2);
        setRotate(30);
        setDay(2);
        break;
      default:
        break;
    }
  };

  return (
    <MainSection>
      <Title>중앙무대</Title>
      <CentralStageMap />

      <Title>팔찌부스 안내</Title>
      <WristbandsInfo />

      <Title>라인업</Title>
      <CelabLineUpList />

      <ScheduleWrapper>
        <StageSchedule>중앙무대 일정</StageSchedule>
        <DaySelector selectedDay={day} onClick={onClickDay} />
        <TimeTable day={day} onSwipe={onSwipe} sliderRef={sliderRef} />

        <PageIconCenter rotatesize={schedulePageIconRotateSize} />
        <PageIconCorner />
      </ScheduleWrapper>
      <MoveToTopBtn />
    </MainSection>
  );
}

const MainSection = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 10rem 2rem;
`;

const MapSize = styled.div`
  width: 100%;
  height: 20rem;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const CentralStageMap = styled(MapSize)`
  background-image: url('/img/stage/central-stage-map.jpg');
  margin-bottom: 16rem;
`;

const PageIconCenter = styled.div`
  z-index: 0;

  position: absolute;
  top: 1.4rem;
  left: 7.5rem;

  width: 23rem;
  height: 29.3169rem;

  transition: all ease 1s;
  transform: ${({ rotatesize }) => `rotate(${rotatesize}deg)`};
  flex-shrink: 0;
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/img/page2.png');
`;

const PageIconCorner = styled.div`
  position: absolute;

  bottom: 0;
  left: 0;

  width: 10rem;
  height: 16rem;

  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/img/page3.png');
`;

const ScheduleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;

  align-items: center;

  width: 100%;
  min-height: 84.3rem;

  margin-top: 22rem;
`;

const Title = styled.header`
  width: 100%;

  margin-bottom: 3.6rem;

  text-align: center;
  ${({ theme }) => theme.fontStyles.head1}
`;
const StageSchedule = styled.p`
  text-align: center;
  ${({ theme }) => theme.fontStyles.head1}
`;

export default CentralStage;
