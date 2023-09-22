/* eslint-disable react/prop-types */
import useGetPubs from '@/query/get/useGetPubs';
import { useState } from 'react';
import styled from 'styled-components';

export default function PubCategory({ categories, setCategoryText, setDepartment, setSubImage }) {
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
                setSubImage(category.image);
                setCategoryText(category.name === '디경융' ? '디자인경영융합' : category.name);
                setPageSection(category.page);
                setDepartment(category.engName);
              }}
            >
              {category.name}
            </span>
          </CategoryTextBox>
        ))}
      </Categories>
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
  margin-top: 2.4rem;
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
