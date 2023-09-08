import React from 'react';
import styled from 'styled-components';
import theme from '@/styles/theme';

import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function LineUpCard({ img, djName, text, date, time }) {
  useEffect(() => {
    AOS.init();
  }, []);
  // console.log(img, djName, text, date, time);
  return (
    <Container data-aos="fade-up" data-aos-duration="800">
      <img src={img} alt="" />
      <TextContainer>
        <InfoDate date={date}>{date}</InfoDate>
        <Hrdiv />
        <InfoTitle>
          {djName} | {time}
        </InfoTitle>
        <InfoText>{text}</InfoText>
      </TextContainer>
    </Container>
  );
}

export default LineUpCard;
const Container = styled.div`
  width: 33.5rem;
  margin-top: 0rem;
  position: relative;
  z-index: 5;
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
const InfoDate = styled.div`
  ${theme.fontStyles.head5};
  color: ${(props) =>
    props.date === '9.13'
      ? 'rgba(66, 207, 97, 1)'
      : props.date === '9.14'
      ? 'rgba(255, 137, 215, 1)'
      : 'rgba(210, 145, 240, 1)'};
`;
const InfoTitle = styled.div`
  ${(props) => props.theme.fontStyles.head5}
  margin-top: 1rem;
`;
const InfoText = styled.div`
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
