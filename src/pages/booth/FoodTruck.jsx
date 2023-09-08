import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { pageState } from '@/libs/store';
import { useEffect } from 'react';
import FoodTruckCard from '@/components/booth/FoodTruckCard';
import MoveToTopBtn from '@/components/common/btn/MoveToTopBtn';

export default function FoodTruck() {
  const [page, isPage] = useRecoilState(pageState);
  const isAuth = false;

  useEffect(() => {
    isPage('booth/foodtruck');
  }, []);

  const foodTruckData = [
    {
      number: 1,
      name: '에이치컴퍼니',
      introduce: '야끼소바',
    },
    {
      number: 2,
      name: '스낵런',
      introduce: '탕후루',
    },
    {
      number: 3,
      name: '웍커',
      introduce: '크림새우3종',
    },
    {
      number: 4,
      name: '와사바리',
      introduce: '닭강정',
    },
    {
      number: 5,
      name: '탑클래스',
      introduce: '자이언트케밥, 빅소세지',
    },
    {
      number: 6,
      name: '짱츄닭',
      introduce: '닭꼬치',
    },
    {
      number: 7,
      name: '월드푸드',
      introduce: '수제츄러스, 아이스크림츄러스',
    },
    {
      number: 8,
      name: '비포',
      introduce: '커피, 음료, 칵테일',
    },
    {
      number: 9,
      name: '에이셉피자',
      introduce: '피자 3종(A$AP, 페퍼로니, 치즈)',
    },
    {
      number: 10,
      name: '하하푸드트럭',
      introduce: '부침개 / 두부김치',
    },
    {
      number: 11,
      name: '체리블라썸',
      introduce: '타코야끼, 소떡',
    },
    {
      number: 12,
      name: '블랙스테이크',
      introduce: '스테이크, 스테이크덮밥',
    },
    {
      number: 13,
      name: '곱창좋은날',
      introduce: '순대곱창볶음',
    },
    {
      number: 14,
      name: '꿈',
      introduce: '크레페',
    },
    {
      number: 15,
      name: '그레잇',
      introduce: '포테이토 5종, 회오리감자',
    },
  ];

  return (
    <FoodTruckPageWrapper>
      <FoodTruckPageTitle>
        <span>푸드트럭</span>
      </FoodTruckPageTitle>
      <FoodTruckMainMap />
      <FoodTruckSubMap />
      <AlertMsg>
        <div />
        <p>푸드 트럭은 축제 당일 들어오는 순서대로 자리가 변동될 수 있습니다.</p>
      </AlertMsg>
      <FoodTruckBooths>
        {foodTruckData.map((foodTruck) => {
          return <FoodTruckCard key={foodTruck.name} data={foodTruck} />;
        })}
      </FoodTruckBooths>
      <MoveToTopBtn />
    </FoodTruckPageWrapper>
  );
}

const FoodTruckPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  padding-top: 6rem;
  background-image: url('/img/booth/profit/profit-background.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

const FoodTruckPageTitle = styled.div`
  padding: 3.6rem 0;
  span {
    ${(props) => props.theme.fontStyles.head1}
  }
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FoodTruckMainMap = styled.div`
  width: 33.5rem;
  height: 19rem;
  margin-bottom: 3.6rem;
  background: url('/img/foodTruckMainMap.png');
  background-size: cover;
`;

const FoodTruckSubMap = styled.div`
  width: 33.5rem;
  height: 19rem;
  background: url('/img/foodTruckSubMap.png');
  background-size: contain;
`;

const AlertMsg = styled.div`
  width: 100%;
  height: 8rem;
  padding: 1.8rem 2rem;
  margin: 2.4rem 0;
  display: flex;
  align-items: center;
  border-radius: 1px;
  background: rgba(16, 16, 16, 0.9);
  backdrop-filter: blur(4px);
  div {
    width: 2.4rem;
    height: 2.4rem;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('/img/icon-pin-location-mono.png');
    margin-right: 1.6rem;
  }
  p {
    color: ${(props) => props.theme.colors.gray200};
    ${(props) => props.theme.fontStyles.body3}
  }
`;

const FoodTruckBooths = styled.div`
  width: 100%;
`;
