import FacilityCardsWrapper from '@/components/facilities/FacilityCardsWrapper';
import FacilityMapWrapper from '@/components/facilities/FacilityMapWrapper';
import FacilitySubTitle from '@/components/facilities/FacilitySubTitle';
import { facilitiesCategory } from '@/constants/FacilitiesCategory';
import { useState } from 'react';
import styled from 'styled-components';

export default function Facilities() {
  const [categoryState, setCategoryState] = useState(0);
  const categoryClicked = (index) => {
    setCategoryState(index);
  };
  return (
    <FacilitiesPageWrapper>
      <FacilitiesPageTitle>
        <span>편의시설</span>
      </FacilitiesPageTitle>
      <FacilitiesCategory>
        {facilitiesCategory.map((category, index) => {
          return (
            <CategoryBox key={category} isClicked={categoryState === index}>
              <span onClick={() => categoryClicked(index)}>{category}</span>
            </CategoryBox>
          );
        })}
      </FacilitiesCategory>
      <FacilityMapWrapper categoryState={categoryState} />
      <FacilitySubTitle categoryState={categoryState} />
      <FacilityCardsWrapper categoryState={categoryState} />
    </FacilitiesPageWrapper>
  );
}

const FacilitiesPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
`;

const FacilitiesPageTitle = styled.div`
  padding: 3.6rem 0;
  span {
    ${(props) => props.theme.fontStyles.head1}
  }
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e3e3e3;
`;

const FacilitiesCategory = styled.div`
  padding: 2.4rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CategoryBox = styled.div`
  padding: 0.8rem 1.2rem;
  span {
    ${(props) => props.theme.fontStyles.head5}
    color:${(props) => (props.isClicked ? '#000000' : '#C4C4C4')};
    transition: color 0.3s ease;
  }
`;
