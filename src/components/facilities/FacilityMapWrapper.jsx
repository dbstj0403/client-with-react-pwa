import styled from 'styled-components';

export default function FacilityMapWrapper({ categoryState }) {
  return (
    <FacilityMap
      alt={'편의시설 지도'}
      src={
        categoryState === 0
          ? 'https://cdn.pixabay.com/photo/2014/03/25/15/18/recycle-296463_1280.png'
          : categoryState === 1
          ? 'https://cdn.pixabay.com/photo/2017/02/24/12/23/bathroom-2094716_1280.jpg'
          : categoryState === 2
          ? 'https://media.istockphoto.com/id/93435662/ko/%EC%82%AC%EC%A7%84/%EC%86%90%EC%9C%BC%EB%A1%9C-%EC%8B%9C%EA%B0%80%EB%A0%9B%ED%98%95-%ED%9D%A1%EC%97%B0%ED%95%A9%EB%8B%88%EB%8B%A4.webp?b=1&s=612x612&w=0&k=20&c=5H5bIKaTWz2VHy6DCgFEDqbooFP5MqhBFWFuWuz6ipg='
          : categoryState === 3
          ? 'https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_1280.jpg'
          : categoryState === 4
          ? 'https://media.istockphoto.com/id/1443409611/ko/%EC%82%AC%EC%A7%84/%EC%96%B8%EB%8D%95-%EC%9C%84%EC%9D%98-%EB%8F%8C-%EC%9C%84%EC%97%90-%EC%9E%88%EB%8A%94-%EB%82%A8%EC%9E%90%EC%99%80-%EA%B0%80%EC%9D%84%EC%9D%98-%ED%99%94%EB%A0%A4%ED%95%9C-%EC%9D%BC%EB%AA%B0%EC%97%90-%EC%95%88%EA%B0%9C-%EC%86%8D%EC%9D%98-%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4-%EC%82%B0-%EB%8F%8C%EB%A1%9C%EB%AF%B8%ED%8B%B0-%EC%9D%B4%ED%83%88%EB%A6%AC%EC%95%84-%EC%8A%A4%ED%8F%AC%ED%8B%B0-%ED%95%9C-%EB%82%A8%EC%9E%90-%EC%95%88%EA%B0%9C-%EC%86%8D%EC%9D%98-%EC%82%B0-%EB%8A%A5%EC%84%A0-%EC%98%A4%EB%A0%8C%EC%A7%80-%EC%9E%94%EB%94%94%EC%99%80-%EB%82%98%EB%AC%B4-%EA%B0%80%EC%9D%84%EC%97%90-%ED%83%9C%EC%96%91%EC%9D%B4%EC%9E%88%EB%8A%94-%ED%91%B8%EB%A5%B8.webp?b=1&s=612x612&w=0&k=20&c=sG0nwupN1w1wYS0TErZCnYMMDpz-Phqtg-OQmDFzxQE='
          : null
      }
    />
  );
}

const FacilityMap = styled.img`
  width: 33.5rem;
  height: 22rem;
  margin-bottom: 6rem;
`;
