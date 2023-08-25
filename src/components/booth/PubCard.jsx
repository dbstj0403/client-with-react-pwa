import styled from 'styled-components';

export default function PubCard({ data }) {
  return (
    <PubCardWrapper>
      <PubCardImage alt={'부스카드 이미지'} src={data.image} />
      <PubCardTextWrapper>
        <span>{data.owns}</span>
        <span>Page {data.page}</span>
        <span>{data.mainMenu}</span>
        <p>{data.introduction}</p>
      </PubCardTextWrapper>
    </PubCardWrapper>
  );
}

const PubCardWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.06);
  padding: 2.1rem;
  display: flex;
  height: 17rem;
  margin-bottom: 1.8rem;
`;

const PubCardImage = styled.img`
  width: 12.8rem;
  height: 9.4rem;
`;

const PubCardTextWrapper = styled.div`
  display: flex;
  margin-left: 2.1rem;
  flex-direction: column;
  span {
    margin-bottom: 0.7rem;
  }
  span:first-child {
    ${(props) => props.theme.fontStyles.subFont2}
  }
  span:nth-child(2),
  :nth-child(3),
  p {
    ${(props) => props.theme.fontStyles.subFont3}
  }
  span:nth-child(3) {
    font-weight: 700;
  }
  p {
    font-size: 1.4rem;
  }
`;
