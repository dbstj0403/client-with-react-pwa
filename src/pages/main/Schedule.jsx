import styled from 'styled-components';
import theme from '../../styles/theme';
import ScheduleTable from '@/components/schedule/ScheduleTable';
import { scheduleData } from '@/constants/ScheduleData';

function Schedule() {
  return (
    <Container>
      <TopImage />
      <MiddleImage />
      <BottomImage />
      <Title>일정 소개</Title>
      {scheduleData.map((schedule, idx) => (
        <ScheduleTable key={`schedule${idx}`} idx={idx} schedule={schedule} />
      ))}
    </Container>
  );
}

export default Schedule;

const Container = styled.section`
  position: relative;
  height: 129rem;
  padding: 0 2rem;

  overflow: hidden;
  background-color: ${theme.colors.background};
`;

const Title = styled.h1`
  padding: 6rem 2rem 8rem 2rem;
  color: ${theme.colors.white};

  ${theme.fontStyles.head1};

  text-align: center;
`;

const TopImage = styled.div`
  position: absolute;
  top: 6.7rem;
  right: 5.5rem;
  z-index: 1;

  width: 24.7rem;
  height: 30.8rem;

  background: url('/img/page4.png') center center no-repeat;
  background-blend-mode: hard-light;
`;

const MiddleImage = styled.div`
  position: absolute;
  top: 39.7rem;
  left: -7.5rem;
  z-index: 1;

  width: 24.7rem;
  height: 30.8rem;
  transform: rotate(-5deg);

  background: url('/img/page5.png') center center no-repeat;
  background-blend-mode: hard-light;
`;

const BottomImage = styled.div`
  position: absolute;
  top: 84rem;
  right: -9.5rem;
  z-index: 1;

  width: 24.7rem;
  height: 30.8rem;
  transform: scaleX(-1) rotate(-155deg);

  background: url('/img/page2.png') center center no-repeat;
  background-blend-mode: hard-light;
`;
