import styled from 'styled-components';
import theme from '../../styles/theme';
import ScheduleTable from '@/components/schedule/ScheduleTable';

function Schedule() {
  return (
    <Container>
      <TopImage />
      <Title>일정 소개</Title>
      <ScheduleTable />
      <ScheduleTable />
      <ScheduleTable />
    </Container>
  );
}

export default Schedule;

const Container = styled.section`
  position: relative;
  height: 129rem;
  padding: 0 2rem;

  overflow: hidden;
`;

const Title = styled.h1`
  padding: 6rem 2rem 8rem 2rem;
  color: ${theme.colors.white};

  ${theme.fontStyles.head1};

  text-align: center;
`;

const TopImage = styled.div`
  position: absolute;
  top: 7.2rem;
  right: 4.5rem;

  width: 24.7rem;
  height: 30.8rem;
  transform: scaleY(-1) rotate(-60deg);

  background: url('/img/main-background.png') center center no-repeat;
  background-blend-mode: hard-light;
`;
