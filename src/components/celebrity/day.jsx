import React from 'react';
import theme from '@/styles/theme';
import styled from 'styled-components';

function Day({ day, info }) {
  return (
    <Container>
      <Title>{day}</Title>

      {info.map((celeb, idx) => (
        <Card key={`celeb-${day}-${idx}`}>
          <CelebImage src={celeb.image} />
          <Introduction>
            <Celeb>{celeb.name}</Celeb>
            <Desc>{celeb.introduce}</Desc>
          </Introduction>
        </Card>
      ))}
    </Container>
  );
}

export default Day;

const Container = styled.div``;

// suit typo 존재하지 않아서 따로
const Title = styled.h1`
  margin-bottom: 3.6rem;

  color: ${theme.colors.green};
  font-family: 'SUIT Variable';
  font-size: 2.8rem;
  font-weight: 600;
  font-style: normal;

  text-align: center;
`;

const Card = styled.div`
  position: relative;
  width: 100%;

  margin-bottom: 3.6rem;
`;

const CelebImage = styled.img`
  width: 100%;
  height: 21.6rem;
`;

const Introduction = styled.div`
  width: 100%;
  height: 15rem;
  padding: 1.8rem 2.8rem 2rem 2rem;

  background-image: url('/img/gradation.png');
  background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%), url('/img/gradation.png');
  background-position-y: -23.3rem;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Celeb = styled.div`
  color: ${theme.colors.white};

  ${theme.fontStyles.head5};
`;

const Desc = styled.div`
  padding: 1.2rem 0;

  border-top: 0.1rem solid ${theme.colors.white};

  color: ${theme.colors.white};
  ${theme.fontStyles.subHead1};
  white-space: pre-line;
`;
