import styled from 'styled-components';
import ToiletMap from '/img/facilities/toilet-map.png';
import MedicalMap from '/img/facilities/medical-map.png';
import GeneralStudentMap from '/img/facilities/general-student-map.png';
export default function FacilityMapWrapper({ categoryState }) {
  return (
    <FacilityMap
      alt={'편의시설 지도'}
      src={
        categoryState === 0
          ? ToiletMap
          : categoryState === 1
          ? MedicalMap
          : categoryState === 2
          ? GeneralStudentMap
          : null
      }
    />
  );
}

const FacilityMap = styled.img`
  width: 33.5rem;
  height: 22rem;
  margin-bottom: 6rem;
`;
