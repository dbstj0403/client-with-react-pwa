import styled from 'styled-components';

export default function PubCard({ data }) {
  return (
    <PubCardWrapper>
      <PubCardImage alt={'부스카드 이미지'} src={data.image} />
      <PubCardTextWrapper>
        <PubOwner>{data.owns}</PubOwner>
        <PubPosition>
          <PubPage isPageOne={data.page === 1}>
            <span>Page {data.page}</span>
          </PubPage>
          <DevideCircle />
          <span>{data.position}</span>
        </PubPosition>
        <PubMainMenu>{data.mainMenu}</PubMainMenu>
        <PubIntroduce>{data.introduction}</PubIntroduce>
      </PubCardTextWrapper>
    </PubCardWrapper>
  );
}

const PubCardWrapper = styled.div`
  padding: 2.4rem 0;
  height: 17rem;
  display: flex;
  border-bottom: 1px solid #e6e6e6;
`;

const PubCardImage = styled.img`
  width: 11.6rem;
  height: 8rem;
`;

const PubCardTextWrapper = styled.div`
  display: flex;
  margin-left: 1.2rem;
  flex-direction: column;
`;

const PubOwner = styled.span`
  ${(props) => props.theme.fontStyles.subFont1}
  font-size:1.6rem;
  line-height: 2.4rem;
`;

const PubPosition = styled.div`
  display: flex;
  align-items: center;
  > span {
    ${(props) => props.theme.fontStyles.subFont1}
    font-weight:400;
    font-size: 1.4rem;
    line-height: 2.2rem;
  }
  div {
    margin-right: 0.4rem;
  }
`;

const PubPage = styled.div`
  span {
    color: ${(props) => (props.isPageOne ? '#ffffff' : '#0075FF')};
    ${(props) => props.theme.fontStyles.subFont1}
    font-weight:400;
    font-size: 1.4rem;
    line-height: 2.2rem;
  }
  padding: 0 0.4rem;
  border-radius: 0.2rem;
  background-color: ${(props) => (props.isPageOne ? '#0075ff' : '#D9EAFC')};
`;

const DevideCircle = styled.div`
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: #000000;
`;

const PubMainMenu = styled.div`
  ${(props) => props.theme.fontStyles.subFont1}
  font-weight:400;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: #333;
`;

const PubIntroduce = styled.p`
  ${(props) => props.theme.fontStyles.subFont1}
  font-weight:400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: #8e8e8e;
`;
