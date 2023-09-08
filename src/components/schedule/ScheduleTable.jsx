import { dayColor } from '@/constants/DayColor';
import theme from '@/styles/theme';
import styled from 'styled-components';

function ScheduleTable({ schedule, idx }) {
  return (
    <Container>
      <Title color={dayColor[idx]}>{schedule.date}</Title>
      {schedule.detail.map((time, idx) => (
        <Item key={`${schedule.date}-${idx}`}>
          <Number>{idx}</Number>
          <Time>
            <TimeDesc>{time.start}</TimeDesc>~<TimeDesc>{time.end}</TimeDesc>
          </Time>
          <ScheduleDescContainer>
            <ScheduleDesc>{time.name}</ScheduleDesc>
          </ScheduleDescContainer>
        </Item>
      ))}
    </Container>
  );
}

export default ScheduleTable;

const Container = styled.div`
  position: relative;
  height: 27.9rem;

  margin-bottom: 8rem;
  z-index: 2;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Title = styled.header`
  padding-left: 0.8rem;
  margin-bottom: 2.4rem;

  color: ${(props) => props.color};
  font-family: 'SUIT Variable';
  font-size: 2.8rem;
  font-weight: 600;
  line-height: normal;
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;

  padding: 0.8rem 1.2rem;
  border-top: 0.1rem solid ${theme.colors.gray800};

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);

  &:last-child {
    border-bottom: none;
  }
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;

  min-width: 1.2rem;
  height: 3.2rem;

  margin-right: 1.2rem;
  ${theme.fontStyles.head5};
`;

const Time = styled.div`
  display: flex;
  margin-right: 2.8rem;
  padding-top: 0.2rem;

  color: ${theme.colors.gray400};
  ${theme.fontStyles.body1};
`;

const TimeDesc = styled.div`
  width: 4.8rem;
  height: 3rem;

  color: ${theme.colors.gray400};
  ${theme.fontStyles.body1};
  text-align: center;
`;

const ScheduleDescContainer = styled.div``;

const ScheduleDesc = styled.div`
  width: 16rem;
  height: 3.2rem;
  padding-top: 0.2rem;

  color: ${theme.colors.white};
  ${theme.fontStyles.body1};
`;
