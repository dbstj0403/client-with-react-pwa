import styled from 'styled-components';

export default function Facilities() {
  return (
    <FacilitiesPageWrapper>
      <FacilitiesPageTitle>
        <span>편의시설</span>
      </FacilitiesPageTitle>
    </FacilitiesPageWrapper>
  );
}

const FacilitiesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FacilitiesPageTitle = styled.div`
  padding: 1.6rem 0;
  span {
    ${(props) => props.theme.fontStyles.mainTitle}
  }
`;
