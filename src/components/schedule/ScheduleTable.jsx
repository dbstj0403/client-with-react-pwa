import theme from '@/styles/theme';
import styled from 'styled-components';

function ScheduleTable(props) {
  return (
    <Container>
      <Title>9.13</Title>
      <Item>
        <Number>1</Number>
        <Time>
          <TimeDesc>18:00</TimeDesc>-<TimeDesc>20:00</TimeDesc>
        </Time>
        <ScheduleDescContainer>
          <ScheduleDesc>수익부스사업</ScheduleDesc>
        </ScheduleDescContainer>
      </Item>
      <Item>
        <Number>2</Number>
        <Time>
          <TimeDesc>18:00</TimeDesc>-<TimeDesc>20:00</TimeDesc>
        </Time>
        <ScheduleDescContainer>
          <ScheduleDesc>수익부스사업</ScheduleDesc>
          <ScheduleDesc>수익부스사업</ScheduleDesc>
        </ScheduleDescContainer>
      </Item>
      <Item>
        <Number>3</Number>
        <Time>
          <TimeDesc>18:00</TimeDesc>-<TimeDesc>20:00</TimeDesc>
        </Time>
        <ScheduleDescContainer>
          <ScheduleDesc>수익부스사업</ScheduleDesc>
          <ScheduleDesc>수익부스사업</ScheduleDesc>
        </ScheduleDescContainer>
      </Item>
    </Container>
  );
}

export default ScheduleTable;

const Container = styled.div`
  width: 33.5rem;
  height: 27.9rem;

  margin-bottom: 8rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

// typo에 스타일이 없어서 임시로 적어둠
// font도 SUIT로 해야하지만 임시로
const Title = styled.header`
  padding-left: 0.8rem;
  margin-bottom: 2.4rem;

  color: ${theme.colors.white};
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
  border-bottom: 0.1rem solid ${theme.colors.gray800};

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

  &:not(:first-child) {
    margin-top: 0.8rem;
  }
`;
