import styled from 'styled-components';
import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function InfoCard() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <InfoContainer data-aos="zoom-in-down" data-aos-duration="800">
      <InfoBox height="15rem" background_color="rgb(13,13,13,0.9)">
        <InfouNumber>1</InfouNumber>
        <InfoTitle>진행 시간</InfoTitle>
        <InfoText>각 일 19시 ~ 24시</InfoText>
      </InfoBox>
      <InfoBox height="25.4rem" background_color="rgb(19,19,19,0.9)">
        <InfouNumber>2</InfouNumber>
        <InfoTitle>입장 가격</InfoTitle>
        <TextWrapper>
          <InfoText span_color="rgba(66, 207, 97, 1)">
            홍익대학교 재학생, 휴학생 및 졸업 유예생 <br /> <span>5000원</span>
          </InfoText>

          <InfoText span_color="rgba(255, 137, 215, 1)">
            외부인 <br />
            <span>20000원</span>
          </InfoText>
        </TextWrapper>
      </InfoBox>
      <InfoBox background_color="rgb(13,13,13,0.9)">
        <InfouNumber>3</InfouNumber>
        <InfoTitle>주의사항</InfoTitle>
        <InfoText>과음 / 흡연 금지</InfoText>
      </InfoBox>
    </InfoContainer>
  );
}
export default InfoCard;
const InfoContainer = styled.div`
  margin: 0 auto;
  margin-top: 7rem;
  width: 33.5rem;
  position: relative;
  z-index: 5;
`;

const InfoBox = styled.div`
  background-color: ${(props) => props.background_color};
  width: 33.5rem;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  padding: 2.4rem 2.8rem 2.4rem 2rem;
`;
const InfouNumber = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
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
  span {
    font-family: Pretendard Variable;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    letter-spacing: 0em;
    color: ${(props) => props.span_color};
  }
`;
const TextWrapper = styled.div`
  width: 28.7rem;
  height: 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
