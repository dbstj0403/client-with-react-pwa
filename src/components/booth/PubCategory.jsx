/* eslint-disable react/prop-types */
import useGetPubs from '@/query/get/useGetPubs';
import { useState } from 'react';
import styled from 'styled-components';

export default function PubCategory({ categories, setCategoryText, setDepartment }) {
  const [categoryState, setCategoryState] = useState(0);
  const [pageSection, setPageSection] = useState('ALL');
  const categoryClicked = (index) => {
    setCategoryState(index);
  };
  return (
    <PubCategoryWrapper>
      <Categories>
        {categories.map((category, index) => (
          <CategoryTextBox key={category.name} isClicked={index === categoryState} category={category}>
            <span
              onClick={() => {
                categoryClicked(index);
                setCategoryText(category.name === '디경융' ? '디지털경영융합' : category.name);
                setPageSection(category.page);
                setDepartment(category.engName);
              }}
            >
              {category.name}
            </span>
          </CategoryTextBox>
        ))}
      </Categories>
      <SubMapImage pageSection={pageSection} />
    </PubCategoryWrapper>
  );
}

const PubCategoryWrapper = styled.div`
  width: 34.2rem;
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2.4rem 0;
`;

const CategoryTextBox = styled.div`
  padding: 0.8rem 1.2rem;
  border-radius: 0.2rem;
  background-color: ${(props) => (props.isClicked ? props.category.backgroundColor : null)};
  transition: all 0.25s ease;
  span {
    ${(props) => props.theme.fontStyles.head5}
    color:${(props) => (props.isClicked ? props.category.textColor : props.theme.colors.gray700)};
    transition: all 0.25s ease;
  }
`;

const SubMapImage = styled.div`
  width: 33.5rem;
  height: 33.5rem;
  background: url(${(props) =>
    props.pageSection === 'A'
      ? '/img/pubSectionA.png'
      : props.pageSection === 'B'
      ? '/img/pubSectionB.png'
      : props.pageSection === 'C'
      ? '/img/pubSectionC.png'
      : null});
  background-size: cover;
`;
