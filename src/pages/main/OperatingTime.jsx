import OperatingTimeItem from '@/components/schedule/OperatingTimeItem';
import { operatingData } from '@/constants/OperatingData';
import theme from '@/styles/theme';
import styled from 'styled-components';

function OperatingTime() {
  return (
    <Container>
      <TopImage />
      <MiddleImage />
      <BottomImage />
      <Title>운영시간</Title>
      <ItemContainer>
        {operatingData.map((data, idx) => (
          <OperatingTimeItem key={`operate${idx}`} number={idx + 1} data={data} />
        ))}
      </ItemContainer>
    </Container>
  );
}

export default OperatingTime;

const Container = styled.section`
  position: relative;
  height: 150rem;
  padding: 0 2rem;

  overflow: hidden;
  background-color: ${theme.colors.background};
`;

const ItemContainer = styled.div``;

const Title = styled.h1`
  padding: 6rem 0 6rem 0;
  color: ${theme.colors.white};

  ${theme.fontStyles.head1};

  text-align: center;
`;

const TopImage = styled.div`
  position: absolute;
  top: -3rem;
  left: -4rem;

  width: 24.7rem;
  height: 30.8rem;

  transform: rotate(-75deg);

  background: url('/img/page2.png') center center no-repeat;
  background-blend-mode: hard-light;
`;

const MiddleImage = styled.div`
  position: absolute;
  top: 34rem;
  left: -3.7rem;

  width: 24.7rem;
  height: 30.8rem;

  background: url('/img/page7.png') center center no-repeat;
  background-blend-mode: hard-light;
`;

const BottomImage = styled.div`
  position: absolute;
  top: 86.4rem;
  right: -1.1rem;
  z-index: 1;

  width: 24.7rem;
  height: 30.8rem;

  background: url('/img/page9.png') center center no-repeat;
  background-blend-mode: hard-light;
`;
