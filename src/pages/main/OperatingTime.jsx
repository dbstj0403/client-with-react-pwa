import OperatingTimeItem from '@/components/schedule/OperatingTimeItem';
import theme from '@/styles/theme';
import styled from 'styled-components';

function OperatingTime() {
  return (
    <Container>
      <Title>운영시간</Title>
      <ItemContainer>
        <OperatingTimeItem />
        <OperatingTimeItem />
        <OperatingTimeItem />
        <OperatingTimeItem />
        <OperatingTimeItem />
        <OperatingTimeItem />
        <OperatingTimeItem />
      </ItemContainer>
    </Container>
  );
}

export default OperatingTime;

const Container = styled.section`
  height: 150rem;
  padding: 0 2rem;
`;

const ItemContainer = styled.div``;

const Title = styled.h1`
  padding: 6rem 0 6rem 0;
  color: ${theme.colors.white};

  ${theme.fontStyles.head1};

  text-align: center;
`;
