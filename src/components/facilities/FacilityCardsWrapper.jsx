import styled from 'styled-components';
import FacilityCard1 from './FacilityCard1';
import FacilityCard2 from './FacilityCard2';
import FacilityCard3 from './FacilityCard3';

export default function FacilityCardsWrapper({ categoryState }) {
  const studentCouncilData = [
    {
      title: '위치',
      detail: '대운동장 중앙',
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
      {categoryState === 0 ? (
        restroomData.map((data) => {
          return <FacilityCard2 key={data.mapPosition} data={data} />;
        })
      ) : categoryState === 1 ? (
        <FacilityCard3 />
      ) : categoryState === 2 ? (
        studentCouncilData.map((data) => {
          return <FacilityCard1 key={data.title} data={data} />;
        })
      ) : null}
    </CardsWrapper>
  );
}

const CardsWrapper = styled.div`
  width: 33.5rem;
`;
