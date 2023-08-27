import styled from 'styled-components';

export default function FacilityCard2({ data }) {
  return (
    <FacilityCardWrapper>
      <FacilityMapPosition>
        <span>{data.mapPosition}</span>
      </FacilityMapPosition>
      <FacilityBuildingPosition>
        <span>{data.building}동 </span>
        <span>{data.floor}층</span>
      </FacilityBuildingPosition>
    </FacilityCardWrapper>
  );
}

const FacilityCardWrapper = styled.div`
  padding: 1.8rem 2rem;
  border-bottom: 1px solid #e3e3e3;
`;

const FacilityMapPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background-color: #000;
  margin-bottom: 0.4rem;
  span {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fontStyles.subFont3};
    font-weight: 600;
    line-height: 1.6rem;
  }
`;

const FacilityBuildingPosition = styled.div`
  span {
    ${(props) => props.theme.fontStyles.subFont1};
  }
  span:last-child {
    color: #0075ff;
  }
`;
