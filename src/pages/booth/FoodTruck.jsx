import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { pageState } from '@/libs/store';
import React, { useEffect } from 'react';
import FoodTruckCard from '@/components/booth/FoodTruckCard';
import MoveToTopBtn from '@/components/common/btn/MoveToTopBtn';
import useGetFoodTrucks from '@/query/get/useGetFoodTrucks';

export default function FoodTruck() {
  const isPage = useSetRecoilState(pageState);

  useEffect(() => {
    isPage('booth/foodtruck');
  }, []);

  const { getFoodTrucks: foodTruckData } = useGetFoodTrucks();

  return (
    <FoodTruckPageWrapper>
      <FoodTruckPageTitle>
        <span>푸드트럭</span>
      </FoodTruckPageTitle>
      <FoodTruckMainMap />
      <FoodTruckSubMap />
      <FoodTruckThirdMap />
      <AlertMsg>
        <div />
        <p>푸드 트럭은 축제 당일 들어오는 순서대로 자리가 변동될 수 있습니다.</p>
      </AlertMsg>
      <FoodTruckBooths>
        {foodTruckData.map((foodTruck, index) => {
          return <FoodTruckCard key={index} data={foodTruck} />;
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
  height: 23.6rem;
  background: url('/img/foodTruckMainMap.png');
  background-size: cover;
`;

const FoodTruckSubMap = styled.div`
  width: 33.5rem;
  height: 27.6rem;
  margin: 3.6rem 0;
  background: url('/img/foodTruckSubMap.png');
  background-size: contain;
`;

const FoodTruckThirdMap = styled.div`
  width: 33.5rem;
  height: 18rem;
  background: url('/img/foodTruckThirdMap.png');
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
