import HorizontalLine from '@/components/common/HorizontalLine';
import theme from '@/styles/theme';
import React from 'react';
import styled from 'styled-components';

function HongikZone() {
  return (
    <MainSection>
      <Title>홍익존</Title>
      <Hr />
      <Map />
    </MainSection>
  );
}

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
`;

const Title = styled.p`
  text-align: center;
  ${theme.fontStyles.mainTitle};
`;

const Hr = styled(HorizontalLine)`
  margin-top: 3.6rem;
  margin-bottom: 3.6rem;
`;

const Map = styled.div`
  border: 1px solid black;
  width: 33.5rem;
  height: 27.8rem;
`;

export default HongikZone;
