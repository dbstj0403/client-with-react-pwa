import styled from 'styled-components';
import FacilityCard1 from './FacilityCard1';
import FacilityCard2 from './FacilityCard2';

export default function FacilityCardsWrapper({ categoryState }) {
  const medicalData = [
    {
      title: '교내 약국 운영 시간',
      detail: '18:00 ~ 24:00',
    },
    {
      title: '축제 의료 부스 운영 시간',
      detail: '5,000만원',
    },
    {
      title: '비상시 응급치료',
      detail: '~위치에서 응급치료를 받으실 수 있습니다.',
    },
  ];
  const studentCouncilData = [
    {
      title: '위치',
      detail: '7번 학생회관 앞 부스',
    },
  ];
  const restroomData = [
    {
      mapPosition: 1,
      building: 'R',
      floor: 1,
    },
    {
      mapPosition: 2,
      building: 'T',
      floor: 3,
    },
    {
      mapPosition: 3,
      building: 'G',
      floor: 1,
    },
    {
      mapPosition: 4,
      building: 'Z4',
      floor: 1,
    },
    {
      mapPosition: 5,
      building: 'A',
      floor: 1,
    },
  ];
  const smokingBoothData = [
    {
      mapPosition: 1,
      building: 'R',
      floor: 1,
    },
    {
      mapPosition: 2,
      building: 'T',
      floor: 5,
    },
    {
      mapPosition: 3,
      building: 'K',
      floor: 2,
    },
    {
      mapPosition: 4,
      building: 'Z4',
      floor: 1,
    },
    {
      mapPosition: 5,
      building: 'A',
      floor: 3,
    },
  ];
  return (
    <CardsWrapper>
      {categoryState === 0
        ? restroomData.map((data) => {
            return <FacilityCard2 key={data.mapPosition} data={data} />;
          })
        : categoryState === 1
        ? smokingBoothData.map((data) => {
            return <FacilityCard2 key={data.mapPosition} data={data} />;
          })
        : categoryState === 2
        ? medicalData.map((data) => {
            return <FacilityCard1 key={data.title} data={data} />;
          })
        : categoryState === 3
        ? studentCouncilData.map((data) => {
            return <FacilityCard1 key={data.title} data={data} />;
          })
        : null}
    </CardsWrapper>
  );
}

const CardsWrapper = styled.div`
  width: 33.5rem;
`;
