import { DaySelector, TimeTable } from '@/components/stage';
import theme from '@/styles/theme';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

function CentralStage() {
  /** 축제 시작 날짜 */
  const festivalStartDate = useMemo(() => Math.floor(new Date('2023-08-25').getTime() / 1000.0), []);

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
      <Title>중앙무대</Title>
      <Map />
      <StageSchedule>중앙무대 일정</StageSchedule>
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
  padding: 1.6rem 1.4rem;
`;

const Map = styled.div`
  width: 31.9rem;
  height: 18.9rem;

  border: 1px solid black;

  margin-bottom: 6.5rem;
`;

const Title = styled.header`
  width: 100%;

  margin-bottom: 1.6rem;

  text-align: center;
  ${theme.fontStyles.mainTitle}
`;

const StageSchedule = styled.p`
  margin-bottom: 1.6rem;

  text-align: center;
  ${theme.fontStyles.subTitle}
`;

export default CentralStage;
