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
  ${(props) => `border-bottom: 1px solid ${props.theme.colors.gray800}`};
`;

const FacilityMapPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  margin-bottom: 0.4rem;
  span {
    color: ${(props) => props.theme.colors.background};
    ${(props) => props.theme.fontStyles.subHead1};
    line-height: 1.6rem;
  }
`;

const FacilityBuildingPosition = styled.div`
  span {
    ${(props) => props.theme.fontStyles.head5};
  }
  span:last-child {
    color: #ff89d7;
  }
`;
