import styled from 'styled-components';
import React from 'react';
import LineUpCard from './LineUpCard';
import theme from '@/styles/theme';
import { ImgList } from '@/constants/DjInfo';
function LineUp() {
  return (
    <LineUpContainer>
      <Title>DJ 라인업</Title>
      {ImgList.map((item, idx) => {
        return (
          <LineUpCard
            data-aos="fade-up"
            data-aos-duration="800"
            key={idx}
            img={item.img}
            djName={item.djName}
            date={item.date}
            time={item.time}
            text={item.text}
          />
        );
      })}
    </LineUpContainer>
  );
}

export default LineUp;

const LineUpContainer = styled.div`
  width: 33.5rem;
  margin: 0 auto;
  position: relative;
  margin-top: 17rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20rem;
`;
const Title = styled.div`
  ${theme.fontStyles.head1};
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
  z-index: 5;
`;
