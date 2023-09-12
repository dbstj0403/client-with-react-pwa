import FacilityCardsWrapper from '@/components/facilities/FacilityCardsWrapper';
import FacilityMapWrapper from '@/components/facilities/FacilityMapWrapper';
import FacilitySubTitle from '@/components/facilities/FacilitySubTitle';
import { facilitiesCategory } from '@/constants/FacilitiesCategory';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { pageState } from '@/libs/store';

export default function Facilities() {
  const [categoryState, setCategoryState] = useState(0);
  const categoryClicked = (index) => {
    setCategoryState(index);
  };

  const isPage = useSetRecoilState(pageState);

  useEffect(() => {
    isPage('facilities');
  }, []);

  return (
    <FacilitiesPageWrapper>
      <FacilitiesPageTitle>
        <span>편의시설</span>
      </FacilitiesPageTitle>
      <FacilitiesCategory>
        {facilitiesCategory.map((category, index) => {
          return (
            <CategoryBox key={category} is_clicked={categoryState === index ? 1 : 0}>
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
  padding: 6rem 2rem;
`;

const FacilitiesPageTitle = styled.div`
  padding: 3.6rem 0;
  span {
    ${(props) => props.theme.fontStyles.head1}
  }
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FacilitiesCategory = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CategoryBox = styled.div`
  padding: 0.8rem;
  span {
    ${(props) => props.theme.fontStyles.head5}
    color:${(props) => (props.is_clicked ? props.theme.colors.white : props.theme.colors.gray700)};
    transition: color 0.3s ease;
  }
  margin-bottom: 2.4rem;
`;
