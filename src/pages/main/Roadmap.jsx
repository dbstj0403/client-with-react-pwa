import { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { menuName } from '../../constants/menuName';
import HongikMapImage from '@/constants/HongikMapImage';

function RoadMap() {
  const [current, setCurrent] = useState(0);
  return (
    <Container>
      <Title>전체 로드맵</Title>
      <HorizonBar />
      <MemuBox>
        {menuName.map((menu, idx) => (
          <MenuItem key={`button${idx}`} idx={idx} active={current === idx ? 1 : 0} onClick={() => setCurrent(idx)}>
            {menu}
          </MenuItem>
        ))}
      </MemuBox>
      <HongikMapImage index={current} />
      <MapGuide>
        <LocationDot />
        <Guide>
          {`지도 내에서 `}
          <Underline>{`해당 영역의 핀`}</Underline>
          {`을 클릭하시면\n상세 페이지로 연결됩니다`}
        </Guide>
      </MapGuide>
    </Container>
  );
}

export default RoadMap;

const Container = styled.section`
  height: 72rem;
  padding: 0 2rem;
  background-color: ${theme.colors.background};
`;

const Title = styled.h1`
  padding: 6rem 0 3.6rem 0;
  color: ${theme.colors.white};

  ${theme.fontStyles.head1};

  text-align: center;
`;

const HorizonBar = styled.hr`
  border: 0.1rem solid ${theme.colors.gray800};
`;

const MemuBox = styled.div`
  display: grid;
  grid-template-areas:
    'button0 button1 button2 button3'
    'button4 button5 button6 button6'
    'button7 button7 button7 button7';
  margin: 1.6rem 0 3.6rem 0;
  padding: 0 2.35rem;
`;

const MenuItem = styled.span`
  grid-area: ${(props) => `button${props.idx}`};
  padding: 1.2rem;
  color: ${(props) => (props.active ? theme.colors.white : theme.colors.gray700)};
  ${(props) => (props.active ? theme.fontStyles.head4 : theme.fontStyles.head5)};
  text-align: center;
  white-space: nowrap;
`;

const MapGuide = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 1.8rem 2rem;
`;

const Guide = styled.div`
  margin-left: 1.6rem;

  color: ${theme.colors.gray200};
  ${theme.fontStyles.body3};
  white-space: pre-line;
`;

const Underline = styled.span`
  color: inherit;
  ${theme.fontStyles.body3};

  text-decoration: underline;
`;

const LocationDot = styled.div`
  width: 2.4rem;
  height: 2.4rem;

  background: url('/img/pinIcon.png') no-repeat;
`;
