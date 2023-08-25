import FoodTruckCard from '@/components/booth/FoodTruckCard';
import styled from 'styled-components';

export default function FoodTruck() {
  const foodTruckData = [
    {
      number: 1,
      brand: 'KFC',
      menu: '치킨',
    },
    {
      number: 2,
      brand: '맘스터치',
      menu: '햄버거',
    },
    {
      number: 1,
      brand: '명랑핫도그',
      menu: '핫도그',
    },
    {
      number: 1,
      brand: '인생라면',
      menu: '라면',
    },
  ];
  return (
    <FoodTruckPageWrapper>
      <FoodTruckPageTitle>
        <span>푸드트럭</span>
      </FoodTruckPageTitle>
      <FoodTruckMap
        alt={'푸드트럭 이미지'}
        src="https://media.istockphoto.com/id/1415170044/ko/%EC%82%AC%EC%A7%84/%EC%95%BC%EC%99%B8-%EA%B1%B0%EB%A6%AC-%EC%9D%8C%EC%8B%9D-%EC%B6%95%EC%A0%9C-%EC%95%BC%EC%99%B8-%EC%B2%A0%ED%8C%90%EC%97%90%EC%84%9C-%EC%9A%94%EB%A6%AC%ED%95%98%EB%8A%94-%EC%86%8C%EC%8B%9C%EC%A7%80-%EA%B3%A0%EA%B8%B0-%EB%B0%8F-%EA%B0%90%EC%9E%90-%EC%9A%94%EB%A6%AC-%EC%88%98%EC%84%9D.webp?b=1&s=612x612&w=0&k=20&c=aKzeRd3r6ZOexBKV4i5QSqDESh6pSc_1CxtX1XoIr1I="
      />
      <FoodTruckBooths>
        {foodTruckData.map((foodTruck, index) => {
          return <FoodTruckCard key={foodTruck.brand} data={foodTruck} />;
        })}
      </FoodTruckBooths>
    </FoodTruckPageWrapper>
  );
}

const FoodTruckPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FoodTruckPageTitle = styled.div`
  padding: 1.6rem 0;
  span {
    ${(props) => props.theme.fontStyles.mainTitle}
  }
`;

const FoodTruckMap = styled.img`
  width: 29.8rem;
  height: 15.7rem;
`;

const FoodTruckBooths = styled.div`
  margin-top: 2.9rem;
  width: 29.6rem;
`;
