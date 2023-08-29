import BlackBoothCard from '@/components/booth/BlackBoothCard';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { pageState } from '@/libs/store';
import { useEffect } from 'react';

export default function FoodTruck() {
  const [page, isPage] = useRecoilState(pageState);

  useEffect(() => {
    isPage('booth/foodtruck');
  }, []);

  const foodTruckData = [
    {
      image: 'https://cdn.pixabay.com/photo/2015/10/22/18/58/chicken-1001767_1280.jpg',
      number: 1,
      name: 'KFC',
      introduce: '치킨을 판매하는 브랜드입니다.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg',
      number: 2,
      name: '맘스터치',
      introduce: '햄버거를 판매하는 브랜드입니다.',
    },
    {
      image:
        'https://media.istockphoto.com/id/1394500853/ko/%EC%82%AC%EC%A7%84/%EC%BD%98%ED%81%AC%EB%A6%AC%ED%8A%B8-%EB%B0%B0%EA%B2%BD-%EC%9C%84%EC%97%90-%EA%B3%B5%EC%98%88-%EC%A2%85%EC%9D%B4%EC%97%90-%EB%91%90-%EA%B0%9C%EC%9D%98-%EB%A7%9B%EC%9E%88%EB%8A%94-%ED%95%AB%EB%8F%84%EA%B7%B8.webp?b=1&s=612x612&w=0&k=20&c=ImxCfRkWMQ1PIXLR0ztp75qZ57HxLGHQ_5s-umXDhec=',
      number: 1,
      name: '명랑핫도그',
      introduce: '핫도그를 판매하는 브랜드입니다.',
    },
    {
      image: 'https://cdn.pixabay.com/photo/2019/11/01/05/57/ramen-4593402_1280.jpg',
      number: 1,
      name: '인생라면',
      introduce: '라면',
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
      <FoodTruckCount>
        <span>16개 부스</span>
      </FoodTruckCount>
      <FoodTruckBooths>
        {foodTruckData.map((foodTruck, index) => {
          return <BlackBoothCard key={foodTruck.name} data={foodTruck} />;
        })}
      </FoodTruckBooths>
    </FoodTruckPageWrapper>
  );
}

const FoodTruckPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
`;

const FoodTruckPageTitle = styled.div`
  padding: 3.6rem 0;
  span {
    ${(props) => props.theme.fontStyles.head1}
  }
  border-bottom: 1px solid #e3e3e3;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FoodTruckMap = styled.img`
  width: 33.5rem;
  height: 19rem;
  margin-top: 3.6rem;
  margin-bottom: 6rem;
`;

const FoodTruckCount = styled.div`
  span {
    ${(props) => props.theme.fontStyles.subHead2}
    font-size:2.8rem;
    line-height: 3.6rem;
  }
  width: 100%;
`;

const FoodTruckBooths = styled.div``;
