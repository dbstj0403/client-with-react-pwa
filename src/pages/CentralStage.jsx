import HorizontalLine from '@/components/common/HorizontalLine';
import { DaySelector, TimeTable } from '@/components/stage';
import theme from '@/styles/theme';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { pageState } from '@/libs/store';

function CentralStage() {
  const [page, isPage] = useRecoilState(pageState);

  useEffect(() => {
    isPage('stage');
  }, []);

  /** 축제 시작 날짜 */
  const festivalStartDate = useMemo(() => Math.floor(new Date('2023-08-26').getTime() / 1000.0), []);

  const [day, setDay] = useState(() => {
    const todayDate = new Date();

    /** getTime()은 UTC 기준이므로 TimezoneOffset을 통해 GMT에 해당하는 초를 구한다. */
    const todaySeconds = Math.floor(new Date().getTime() / 1000.0) - todayDate.getTimezoneOffset() * 60;

    /** 축제 시작일을 seconds로 환산한 것을 기준으로 현재 시각을 초로 나타낸 것의 차이를 구한다. */
    const currentDays = (todaySeconds - festivalStartDate) / 86400;

    if (currentDays < 1) return 'day1';
    if (currentDays < 2) return 'day2';
    if (currentDays < 3) return 'day3';
    else return 'Finished';
  });

  return (
    <MainSection>
      <Title>무대</Title>
      <Hr />
      <Map />
      <StageSchedule>중앙무대 일정</StageSchedule>
      <Hr />
      <DaySelector selectedDay={day} onClick={(day) => setDay(day)} />
      <TimeTable day={day} />
    </MainSection>
  );
}

const MainSection = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  border: 1px solid black;
  padding: 4rem 2rem;
`;

const Map = styled.div`
  width: 33.5rem;
  height: 18.9rem;

  border: 1px solid black;

  margin-bottom: 8rem;
`;

const Title = styled.header`
  width: 100%;

  text-align: center;
  ${theme.fontStyles.mainTitle}
`;

const Hr = styled(HorizontalLine)`
  margin-top: 3.6rem;
  margin-bottom: 3.6rem;
`;

const StageSchedule = styled.p`
  text-align: center;
  ${theme.fontStyles.mainTitle}
`;

export default CentralStage;
