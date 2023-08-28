import { useState } from 'react';
import styled from 'styled-components';
import theme from './../../styles/theme';
import { menuName } from './../../constants/menuName';
import { FaMapMarkerAlt } from 'react-icons/fa';

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
      <HongikMap src="/img/hongikmap.png" alt="hongikmap" />
      <MapGuide>
        <FaMapMarkerAlt size="2.4rem" color={theme.colors.mapMarker} />
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
  height: 68rem;
  padding: 0 2rem;
`;

const Title = styled.h1`
  padding: 6rem 0 3.6rem 0;
  color: ${theme.colors.black};

  ${theme.fontStyles.head1};

  text-align: center;
`;

const HorizonBar = styled.hr`
  border: 0.1rem solid ${theme.colors.lightgray};
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
  color: ${(props) => (props.active ? theme.colors.black : theme.colors.menuDisabled)};
  ${(props) => (props.active ? theme.fontStyles.head4 : theme.fontStyles.head5)};
  text-align: center;
  white-space: nowrap;
`;

const HongikMap = styled.img`
  width: 100%;
  height: 19rem;
  margin-bottom: 1.6rem;
  object-fit: contain;
`;

const MapGuide = styled.div`
  display: flex;
  align-items: center;
  padding: 1.8rem 2rem;
`;

const Guide = styled.div`
  margin-left: 1.6rem;

  color: ${theme.colors.mapMarker};
  ${theme.fontStyles.body3};
  white-space: pre-line;
`;

const Underline = styled.span`
  color: inherit;
  ${theme.fontStyles.body3};

  text-decoration: underline;
`;
