import React, { Suspense, lazy } from 'react';
import PubCategory from '@/components/booth/PubCategory';
import { pubCategory } from '@/constants/pubCategoryState';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { adminState, pageState } from '@/libs/store';
import AddingPubCard from '@/components/booth/AddingPubCard';
import useGetPubs from '@/query/get/useGetPubs';
import MoveToTopBtn from '@/components/common/btn/MoveToTopBtn';
import usePostPubs from '@/query/post/usePostPubs';

export default function Pub() {
  const PubCard = lazy(() => import('@/components/booth/PubCard'));
  const [categoryText, setCategoryText] = useState('전체');
  const [department, setDepartment] = useState('all');
  const isPage = useSetRecoilState(pageState);
  const [boothAdding, setBoothAdding] = useState(false);
  const isAdmin = useRecoilValue(adminState);
  const addBoothClicked = () => {
    setBoothAdding(true);
  };

  useEffect(() => {
    isPage('booth/pub');
  }, []);

  const { getPubs, isLoading, error } = useGetPubs(department);
  console.log(getPubs);
  return (
    <PubPageWrapper>
      <PubPageTitle>
        <span>주점</span>
      </PubPageTitle>
      <PubMapWrapper>
        <PubMainMap />
        <PubCategory categories={pubCategory} setCategoryText={setCategoryText} setDepartment={setDepartment} />
      </PubMapWrapper>
      {isAdmin ? (
        <AddBooth onClick={addBoothClicked}>
          <span>부스 추가</span>
          <span>+</span>
        </AddBooth>
      ) : null}

      <PubBooths>
        <AreaText>
          <span>{categoryText}구역</span>
          <span>{!isLoading ? getPubs.pub.length : null} 부스</span>
        </AreaText>
        {boothAdding ? <AddingPubCard department={department} /> : null}

        <PubCards>
          {!isLoading
            ? getPubs.pub.map((booth, index) => {
                return (
                  <Suspense fallback={null}>
                    <PubCard key={booth.department + index} data={booth} />
                  </Suspense>
                );
              })
            : null}
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
