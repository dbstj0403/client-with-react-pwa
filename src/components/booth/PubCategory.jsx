/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';

export default function PubCategory({ categories, setCategoryText }) {
  const [categoryState, setCategoryState] = useState(0);
  const categoryClicked = (index) => {
    setCategoryState(index);
  };
  return (
    <PubCategoryWrapper>
      <Categories>
        {categories.map((category, index) => (
          <CategoryTextBox key={category.name} isClicked={index === categoryState} isPageOne={category.page === 1}>
            <span
              onClick={() => {
                categoryClicked(index);
                setCategoryText(category.name);
              }}
            >
              {category.name}
            </span>
          </CategoryTextBox>
        ))}
      </Categories>
      <SubMapImage
        alt={'주점 지도2'}
        src="https://cdn.pixabay.com/photo/2023/08/06/22/35/lifeguard-tower-8173913_1280.jpg"
      />
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
  background-color: ${(props) =>
    props.isClicked ? (props.isPageOne ? 'rgba(66, 207, 97, 0.2)' : 'rgba(255, 137, 215, 0.20)') : null};
  transition: background-color 0.25s ease;
  span {
    ${(props) => props.theme.fontStyles.head5}
    color:${(props) => (props.isClicked ? (props.isPageOne ? props.theme.colors.green : '#FF89D7') : null)};
  }
`;

const SubMapImage = styled.img`
  width: 34.2rem;
  height: 21.3rem;
`;
