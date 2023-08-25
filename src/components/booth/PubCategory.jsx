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
          <CategoryTextBox key={category} isClicked={index === categoryState}>
            <span
              onClick={() => {
                categoryClicked(index);
                setCategoryText(category);
              }}
            >
              {category}
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
  margin-top: 1.8rem;
  padding: 1rem 0;
  width: 34.2rem;
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CategoryTextBox = styled.div`
  padding: 0.7rem 1rem;
  border-radius: 0.3rem;
  background-color: ${(props) => (props.isClicked ? 'blue' : null)};
  span {
    ${(props) => props.theme.fontStyles.subFont1}
    color:${(props) => (props.isClicked ? '#f0f0f0' : 'rgba(0,0,0,0.3)')}
  }
`;

const SubMapImage = styled.img`
  width: 34.2rem;
  height: 21.3rem;
`;
