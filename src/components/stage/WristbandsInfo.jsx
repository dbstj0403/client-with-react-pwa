import React, { useMemo } from 'react';
import styled from 'styled-components';
import Card from '../common/Card';

export default function WristbandsInfo() {
  const informations = useMemo(
    () => [
      {
        number: 1,
        title: '사전 배부 일시',
        date: '2023년 09월 12일',
        time: '11:00 ~ 13:00 / 14:00 ~ 18:00',
        map: <PrevWrist />,
      },
      {
        number: 2,
        title: '현장 배부 일시',
        date: '2023년 09월 13일 ~ 15일',
        time: '09:00 ~ 13:00 / 14:00 ~ 18:00',
        map: <DDayWrist />,
      },
    ],
    []
  );

  return informations.map((information) => (
    <React.Fragment key={information.number}>
      {information.map}
      <Card variant="secondary" data={information} />
    </React.Fragment>
  ));
}

const MapSize = styled.div`
  width: 100%;
  height: 20rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const PrevWrist = styled(MapSize)`
  background-image: url('/img/stage/prev-wrist.jpg');
`;

const DDayWrist = styled(MapSize)`
  background-image: url('/img/stage/d-day-wrist.jpg');
`;
