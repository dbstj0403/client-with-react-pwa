import styled from 'styled-components';
import theme from '../../styles/theme';
import { menuName } from '../../constants/menuName';
import HongikMapImage from '@/constants/HongikMapImage';
import { roadmapState } from '@/libs/store';
import { useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

function RoadMap() {
  const [current, setCurrent] = useRecoilState(roadmapState);
  const resetCurrentState = useResetRecoilState(roadmapState);

  useEffect(() => {
    return () => {
      resetCurrentState();
    };
  }, []);

  return (
    <Container>
      <Title>전체 로드맵</Title>
      <HorizonBar />
      <MemuBox>
        <Row>
          <Item active={current === 0 ? 1 : 0} onClick={() => setCurrent(0)}>
            {menuName[0]}
          </Item>
          <Item active={current === 1 ? 1 : 0} onClick={() => setCurrent(1)}>
            {menuName[1]}
          </Item>
          <Item active={current === 2 ? 1 : 0} onClick={() => setCurrent(2)}>
            {menuName[2]}
          </Item>
        </Row>
        <Row>
          <Item active={current === 3 ? 1 : 0} onClick={() => setCurrent(3)}>
            {menuName[3]}
          </Item>
          <Item active={current === 4 ? 1 : 0} onClick={() => setCurrent(4)}>
            {menuName[4]}
          </Item>
        </Row>
        <Row>
          <Item active={current === 5 ? 1 : 0} onClick={() => setCurrent(5)}>
            {menuName[5]}
          </Item>
          <Item active={current === 6 ? 1 : 0} onClick={() => setCurrent(6)}>
            {menuName[6]}
          </Item>
          <Item active={current === 7 ? 1 : 0} onClick={() => setCurrent(7)}>
            {menuName[7]}
          </Item>
        </Row>
        <Row>
          <Item active={current === 8 ? 1 : 0} onClick={() => setCurrent(8)}>
            {menuName[8]}
          </Item>
        </Row>
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
  width: 100%;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 1.6rem 0 3.6rem 0;
`;

const Row = styled.div`
  display: flex;
`;

const Item = styled.span`
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
