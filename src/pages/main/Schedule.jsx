import styled from 'styled-components';
import theme from '../../styles/theme';
import ScheduleTable from '@/components/schedule/ScheduleTable';

function Schedule() {
  return (
    <Container>
      <Title>일정 소개</Title>
      <ScheduleTable />
      <ScheduleTable />
      <ScheduleTable />
    </Container>
  );
}

export default Schedule;

const Container = styled.section`
  height: 129rem;
  padding: 0 2rem;
`;

const Title = styled.h1`
  padding: 6rem 2rem 8rem 2rem;
  color: ${theme.colors.white};

  ${theme.fontStyles.head1};

  text-align: center;
`;
