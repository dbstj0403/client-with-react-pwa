import styled from 'styled-components';
import theme from '../../styles/theme';

function Schedule() {
  return (
    <Container>
      <Title>일정 소개</Title>
      <HorizonBar />
      <ScheduleBoxLayout>
        <ScheduleBox odd={1}>
          <Number odd={1}>1</Number>
          <ScheduleTitle odd={1}>메인무대 운영시간</ScheduleTitle>
          <ScheduleTime odd={1}>18:00 ~ 24:00</ScheduleTime>
        </ScheduleBox>
        <ScheduleBox odd={0}>
          <Number odd={0}>2</Number>
          <ScheduleTitle odd={0}>수익부스 사업 시간</ScheduleTitle>
          <ScheduleTime odd={0}>18:00 ~ 24:00</ScheduleTime>
        </ScheduleBox>
        <ScheduleBox odd={1}>
          <Number odd={1}>1</Number>
          <ScheduleTitle odd={1}>주점 운영시간</ScheduleTitle>
          <ScheduleTime odd={1}>18:00 ~ 24:00</ScheduleTime>
        </ScheduleBox>
        <ScheduleBox odd={0}>
          <Number odd={0}>2</Number>
          <ScheduleTitle odd={0}>푸드 트럭</ScheduleTitle>
          <ScheduleTime odd={0}>18:00 ~ 24:00</ScheduleTime>
        </ScheduleBox>
      </ScheduleBoxLayout>
    </Container>
  );
}

export default Schedule;

const Container = styled.section`
  height: 94.8rem;
`;

const Title = styled.h1`
  padding: 6rem 2rem 3.6rem 2rem;
  color: ${theme.colors.black};

  ${theme.fontStyles.head1};

  text-align: center;
`;

const HorizonBar = styled.hr`
  margin: 0 2rem;
  margin-bottom: 8rem;

  border: 0.1rem solid ${theme.colors.lightgray};
`;

const ScheduleBoxLayout = styled.div`
  position: relative;
  padding: 0 2rem;
  width: 100%;
  background-color: ${theme.colors.white};

  &::before {
    position: absolute;
    top: -3%;
    left: 15%;
    z-index: -1;
    width: 50%;
    height: 90%;
    transform: rotate(-9.647deg);
    background-color: ${theme.colors.darkblue};
    content: '';
  }

  &::after {
    position: absolute;
    top: 13%;
    right: 15%;
    z-index: -1;
    width: 50%;
    height: 90%;
    transform: rotate(-9.647deg);
    background-color: ${theme.colors.darkblue};
    content: '';
  }
`;

const ScheduleBox = styled.div`
  padding: 1.8rem 2.8rem 2.4rem 2rem;
  background: ${(props) => (props.odd ? theme.colors.blue : theme.colors.lightblue)};
`;

// typeface guide에 없어서 임시로 body2로 설정
const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.4rem;
  height: 2.4rem;
  border-radius: 4rem;
  background-color: ${(props) => (props.odd ? theme.colors.white : theme.colors.blue)};

  color: ${(props) => (props.odd ? theme.colors.blue : theme.colors.lightblue)};
  ${theme.fontStyles.body2};
`;

const ScheduleTitle = styled.div`
  margin: 0.6rem 0 0.8rem 0;
  color: ${(props) => (props.odd ? theme.colors.white : theme.colors.blue)};
  ${theme.fontStyles.head5};
`;

// typeface guide에 없어서 임시로 body2로 설정
const ScheduleTime = styled.div`
  padding: 0.8rem 0;
  border-top: 0.1rem solid ${(props) => (props.odd ? theme.colors.white : theme.colors.blue)};
  color: ${(props) => (props.odd ? theme.colors.white : theme.colors.blue)};
  opacity: ${(props) => (props.odd ? 0.7 : 1)};
  ${theme.fontStyles.body2};
`;
