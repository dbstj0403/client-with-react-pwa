import React from 'react';
import PubCard from '@/components/booth/PubCard';
import PubCategory from '@/components/booth/PubCategory';
import { pubCategory } from '@/constants/pubCategoryState';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { pageState } from '@/libs/store';
import AddingPubCard from '@/components/booth/AddingPubCard';
import useGetPubs from '@/query/get/useGetPubs';
import MoveToTopBtn from '@/components/common/btn/MoveToTopBtn';

export default function Pub() {
  const [categoryText, setCategoryText] = useState('전체');
  const [department, setDepartment] = useState('fineArt');
  const isPage = useSetRecoilState(pageState);
  const [boothAdding, setBoothAdding] = useState(false);
  const isAuth = false;
  const addBoothClicked = () => {
    setBoothAdding(true);
  };

  useEffect(() => {
    isPage('booth/pub');
  }, []);

  const { getPubs, isLoading, error } = useGetPubs(department);
  // console.log(getPubs);

  const boothData = [
    {
      image: 'https://cdn.pixabay.com/photo/2023/04/27/10/22/cat-7954262_1280.jpg',
      owns: '예술학과 주점',
      page: 'A',
      position: 1,
      mainMenu: '국물떡볶이',
      introduction: '가장 맛있는 주점입니다. 많이많이 놀러오세요!! 서비스 많이 드립니다.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2023/04/27/10/22/cat-7954262_1280.jpg',
      owns: '컴퓨터공학과 주점',
      page: 'B',
      position: 2,
      mainMenu: '감자튀김',
      introduction:
        '가장 맛있는 주점입니다. 많이많이 놀러오세요!! 서비스 많이 드립니다.서비스 많이 드립니다.서비스 많이 드립니다.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2023/04/27/10/22/cat-7954262_1280.jpg',
      owns: '경영학과 주점',
      page: 'C',
      position: 1,
      mainMenu: '닭꼬치',
      introduction: '가장 맛있는 주점입니다. 많이많이 놀러오세요!! 서비스 많이 드립니다.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2023/04/27/10/22/cat-7954262_1280.jpg',
      owns: '화학공학과 주점',
      page: 'A',
      position: 2,
      mainMenu: '계란말이',
      introduction: '가장 맛있는 주점입니다. 많이많이 놀러오세요!! 서비스 많이 드립니다.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2023/04/27/10/22/cat-7954262_1280.jpg',
      owns: '화학공학과 주점',
      page: 'B',
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
        <PubMainMap />
        <PubCategory categories={pubCategory} setCategoryText={setCategoryText} setCategoryEngText={setDepartment} />
      </PubMapWrapper>
      {isAuth ? (
        <AddBooth onClick={addBoothClicked}>
          <span>부스 추가</span>
          <span>+</span>
        </AddBooth>
      ) : null}

      <PubBooths>
        <AreaText>
          <span>{categoryText} 구역</span>
          <span>14개 부스</span>
        </AreaText>
        {boothAdding ? <AddingPubCard /> : null}

        <PubCards>
          {boothData.map((booth, index) => {
            return <PubCard key={booth.owns + index} data={booth} />;
          })}
        </PubCards>
      </PubBooths>
      <MoveToTopBtn />
    </PubPageWrapper>
  );
}

const PubPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  padding-top: 6rem;
`;

const PubPageTitle = styled.div`
  padding: 3.6rem 0;
  span {
    ${(props) => props.theme.fontStyles.head1}
  }
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PubMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3.6rem;
`;

const AddBooth = styled.div`
  width: 100%;
  padding: 0.8rem 1.2rem;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.6rem;
  span {
    ${(props) => props.theme.fontStyles.subHead1}
  }
  span:last-child {
    color: ${(props) => props.theme.colors.green};
    font-size: 2.2rem;
    margin-left: 0.4rem;
  }
`;

const PubMainMap = styled.div`
  width: 33.5rem;
  height: 33.5rem;
  background: url('/img/pubMainMap.png');
  background-size: cover;
`;

const PubBooths = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.5rem;
`;

const AreaText = styled.div`
  display: flex;
  flex-direction: column;
  span:first-child {
    ${(props) => props.theme.fontStyles.head3}
  }
  span:last-child {
    margin-top: 0.4rem;
    color: ${(props) => props.theme.colors.gray400};
    ${(props) => props.theme.fontStyles.body1}
    line-height: 2.4rem;
  }
`;

const PubCards = styled.div`
  margin-top: 1rem;
`;
