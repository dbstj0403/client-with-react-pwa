import React from 'react';
import styled from 'styled-components';
import linupImg from '../../assets/image/lineUpCardImg.svg';

function LineUpCard({ number, djName, text }) {
  return (
    <Container>
      <img src={linupImg} alt="" />
      <TextContainer>
        <InfouNumber>{number}</InfouNumber>
        <Hrdiv />
        <InfoTitle>{djName}</InfoTitle>
        <InfoText>{text}</InfoText>
      </TextContainer>
    </Container>
  );
}

export default LineUpCard;
const Container = styled.div`
  width: 33.5rem;
  margin-top: 4rem;
  img {
    width: 33.5rem;
    height: 21.6rem;
  }
`;
const TextContainer = styled.div`
  width: 33.5rem;
  min-height: 20.4rem;
  padding: 1.8rem 2.8rem 2rem 2rem;
`;
const InfouNumber = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background-color: white;
  color: black;
  text-align: center;
  font-family: Pretendard Variable;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.4rem;
  letter-spacing: 0em;
`;
const InfoTitle = styled.div`
  ${(props) => props.theme.fontStyles.head5}
  margin-top: 1rem;
`;
const InfoText = styled.div`
  border-top: 1px solid #1d1d1d;
  font-family: Pretendard Variable;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 0.3rem;
  padding-top: 0.5rem;
  color: ${(props) => props.theme.colors.gray300};
`;
const Hrdiv = styled.div`
  margin-top: 2rem;
  width: 33.5rem;
  height: 0.1rem;
  background: linear-gradient(to right, white, black);
`;
