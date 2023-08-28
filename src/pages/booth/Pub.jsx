import PubCard from '@/components/booth/PubCard';
import PubCategory from '@/components/booth/PubCategory';
import { pubCategory } from '@/state/booth/pubCategoryState';
import { useState } from 'react';
import styled from 'styled-components';

export default function Pub() {
  const [categoryText, setCategoryText] = useState('전체');
  const boothData = [
    {
      image: 'https://cdn.pixabay.com/photo/2023/04/27/10/22/cat-7954262_1280.jpg',
      owns: '예술학과 주점',
      page: 1,
      position: 1,
      mainMenu: '국물떡볶이',
      introduction: '가장 맛있는 주점입니다. 많이많이 놀러오세요!! 서비스 많이 드립니다.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2023/04/27/10/22/cat-7954262_1280.jpg',
      owns: '컴퓨터공학과 주점',
      page: 1,
      position: 2,
      mainMenu: '감자튀김',
      introduction: '가장 맛있는 주점입니다. 많이많이 놀러오세요!! 서비스 많이 드립니다.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2023/04/27/10/22/cat-7954262_1280.jpg',
      owns: '경영학과 주점',
      page: 2,
      position: 1,
      mainMenu: '닭꼬치',
      introduction: '가장 맛있는 주점입니다. 많이많이 놀러오세요!! 서비스 많이 드립니다.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2023/04/27/10/22/cat-7954262_1280.jpg',
      owns: '화학공학과 주점',
      page: 2,
      position: 2,
      mainMenu: '계란말이',
      introduction: '가장 맛있는 주점입니다. 많이많이 놀러오세요!! 서비스 많이 드립니다.',
    },
  ];
  return (
    <PubPageWrapper>
      <PubPageTitle>
        <span>주점</span>
      </PubPageTitle>
      <PubMapWrapper>
        <PubMainMap alt={'주점 지도1'} src="https://cdn.pixabay.com/photo/2023/08/15/11/47/mushroom-8191823_1280.jpg" />
        <PubCategory categories={pubCategory} setCategoryText={setCategoryText} />
      </PubMapWrapper>
      <PubBooths>
        <AreaText>
          <span>{categoryText} 구역</span>
          <span>14개 부스</span>
        </AreaText>
        <PubCards>
          {boothData.map((booth, index) => {
            return <PubCard key={booth.owns + index} data={booth} />;
          })}
        </PubCards>
      </PubBooths>
    </PubPageWrapper>
  );
}

const PubPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
`;

const PubPageTitle = styled.div`
  padding: 1.6rem 0;
  span {
    ${(props) => props.theme.fontStyles.mainTitle}
  }
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  justify-content: center;
`;

const PubMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.6rem;
`;

const PubMainMap = styled.img`
  width: 33rem;
  height: 21.3rem;
`;

const PubBooths = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.5rem;
`;

const AreaText = styled.div`
  margin-top: 3.6rem;
  display: flex;
  flex-direction: column;
  span {
    ${(props) => props.theme.fontStyles.subTitle}
  }
  span:last-child {
    margin-top: 0.8rem;
    color: rgba(0, 0, 0, 0.3);
  }
`;

const PubCards = styled.div`
  margin-top: 1rem;
`;
