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
          <CategoryTextBox key={category.name} isclicked={index === categoryState ? 1 : 0} category={category}>
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
      <SubMapImage page_section={pageSection} />
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
  background-color: ${(props) => (props.isclicked ? props.category.backgroundColor : null)};
  transition: all 0.25s ease;
  span {
    ${(props) => props.theme.fontStyles.head5}
    color:${(props) => (props.isclicked ? props.category.textColor : props.theme.colors.gray700)};
    transition: all 0.25s ease;
  }
`;

const SubMapImage = styled.div`
  width: 33.5rem;
  height: 33.5rem;
  background: url(${(props) =>
    props.page_section === 'A'
      ? '/img/pubSectionA.png'
      : props.page_section === 'B'
      ? '/img/pubSectionB.png'
      : props.page_section === 'C'
      ? '/img/pubSectionC.png'
      : null});
  background-size: cover;
`;
