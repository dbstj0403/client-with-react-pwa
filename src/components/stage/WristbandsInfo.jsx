import React, { useMemo } from 'react';
import styled from 'styled-components';
import { ProfitBoothCard } from '../booth/profit';

export default function WristbandsInfo() {
  const informations = useMemo(
    () => [
      {
        boothNum: 1,
        boothName: '사전 배부 일시',
        hosted: '2023년 09월 12일',
        intro: '11:00 ~ 13:00 / 14:00 ~ 18:00',
        map: <PrevWrist />,
      },
      {
        boothNum: 2,
        boothName: '현장 배부 일시',
        hosted: '2023년 09월 13일 ~ 15일',
        intro: '09:00 ~ 13:00 / 14:00 ~ 18:00',
        map: <DDayWrist />,
      },
    ],
    []
  );

  return informations.map((information) => (
    <>
      {information.map}
      <ProfitBoothCard key={information.number} variant="secondary" data={information} />
    </>
  ));
}

const PrevWrist = styled.div`
  width: 33.5rem;
  height: 20rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/img/stage/prev-wrist.jpg');
`;

const DDayWrist = styled.div`
  width: 33.5rem;
  height: 20rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('/img/stage/d-day-wrist.jpg');
`;
