import styled from 'styled-components';

export default function FoodTruckCard({ data }) {
  return (
    <CardWrapper>
      <div>
        <span>
          {'<'}
          {data.number}
          {'>'}
        </span>
      </div>
      <div>
        <span>{data.brand} 부스</span>
      </div>
      <p>{data.menu}를 판매하는 부스입니다.</p>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.06);
  padding: 2.3rem 1.9rem;
  margin-bottom: 1.6rem;
  height: 14.2rem;
  margin-bottom: 1.6rem;
  display: flex;
  flex-direction: column;
  div {
    height: 2.6rem;
    span {
      ${(props) => props.theme.fontStyles.subFont2};
      font-size: 1.3rem;
    }
  }
  p {
    height: 2.6rem;
    ${(props) => props.theme.fontStyles.subFont3}
    font-size:1.3rem;
  }
`;
