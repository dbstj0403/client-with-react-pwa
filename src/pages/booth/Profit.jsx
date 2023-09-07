import BlackBoothCard from '@/components/booth/BlackBoothCard';
import theme from '@/styles/theme';
import React, { useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { pageState } from '@/libs/store';

function Profit() {
  const [page, isPage] = useRecoilState(pageState);

  useEffect(() => {
    isPage('booth/profit');
  }, []);

  const boothFocus = useRef([]);

  const booths = useMemo(
    () => [
      {
        number: 1,
        hosted: '산업데이터공학과 학회 리버티',
        boothName: 'youthVIBE',
        intro: '젊음을 입고 홍대를 담다, 스트릿과 사진의 만남',
      },
      {
        number: 2,
        hosted: '전자전기공학부 학회 어울림',
        boothName: '시원함에서 어울림 한잔',
        intro: '신나는 리듬을 따라가보니 시원한 카페가 눈 앞에! 귀여운 경품까지?',
      },
      {
        number: 3,
        hosted: '중앙동아리 HICC',
        boothName: '이브, 프시케, 그리고 악세사리와 타투 프린팅',
        intro: '악세사리… 타투… 좋아하세요?',
      },
      {
        number: 4,
        hosted: '경영대학 소모임 하이브레인',
        boothName: '홍익대 주먹왕을 찾아라!',
        intro: '시원하게 스트레스도 풀고 경품도 받고!',
      },
      {
        number: 5,
        hosted: '중앙동아리 원플&아톰',
        boothName: '원플X아톰 방탈출',
        intro: '시계 토끼를 따라 이상한 나라로! 창의적 스토리와 멋진 장치를 경험할 방탈출',
      },
      {
        number: 6,
        hosted: '산업데이터공학과 학회 와농',
        boothName: '와농타코야끼 홍대입구역점',
        intro: '이랏샤이마세!타코야끼 드시고 농구 한 판 하시고 가세요!',
      },
      {
        number: 7,
        hosted: '회화과 학회 Grills',
        boothName: 'Grills의 화실',
        intro: '특별한 날, 페이스 페인팅으로 오늘만큼은 더 특별해져보세요',
      },
      {
        number: 8,
        hosted: '목조형가구학과 소모임 WCS(떱시)',
        boothName: '안전제일 떱시공작소',
        intro: '정신집중 사고주의! 우당탕탕 떱시공작소의 비밀을 공개합니다!',
      },
      {
        number: 9,
        hosted: '캠퍼스자율전공학부 학생회',
        boothName: '헤나 해놔',
        intro: '마! 너 헤나 해봤나!',
      },
      {
        number: 10,
        hosted: '창업동아리 온도계',
        boothName: 'Take out',
        intro: '주문하신 과자에이드 나왔습니다~ 앗, 번호는 안 들고 가시나요?',
      },
      {
        number: 11,
        hosted: '홍아람',
        boothName: '홍익을 새기다',
        intro: '홍아람이 만든 한정판 홍익대 타투스티커와 도장, 와우 키링까지 받을 수 있는 기회!',
      },
    ],
    []
  );

  const pointers = useMemo(
    () => [
      {
        number: 1,
        top: '10.2rem',
        left: '12.5rem',
      },
      {
        number: 2,
        top: '10.8rem',
        left: '14.3rem',
      },
      {
        number: 3,
        top: '11.2rem',
        left: '16rem',
      },
      {
        number: 4,
        top: '11.7rem',
        left: '17.7rem',
      },
      {
        number: 5,
        top: '8rem',
        left: '11rem',
      },
      {
        number: 6,
        top: '12.2rem',
        left: '11.2rem',
      },
      {
        number: 7,
        top: '12.8rem',
        left: '12.9rem',
      },
      {
        number: 8,
        top: '14.5rem',
        left: '22.7rem',
      },
      {
        number: 9,
        top: '14.5rem',
        left: '24.5rem',
      },
      {
        number: 10,
        top: '14.5rem',
        left: '26.2rem',
      },
      {
        number: 11,
        top: '14rem',
        left: '17.2rem',
      },
    ],
    []
  );

  const onClickPointer = (number) => {
    boothFocus.current[number].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  };

  return (
    <MainSection>
      <Title>수익부스</Title>

      <BoothMap />
      <BoothDetail>
        {pointers.map((pointer) => (
          <Pointer
            key={`pointer${pointer.number}`}
            number={pointer.number}
            left={pointer.left}
            top={pointer.top}
            onClick={() => onClickPointer(pointer.number)}
          />
        ))}
      </BoothDetail>

      {booths.map((booth) => (
        <div ref={(el) => (boothFocus.current[booth.number] = el)} key={booth.number}>
          <BlackBoothCard data={booth} variant="secondary" />
        </div>
      ))}
    </MainSection>
  );
}

const MainSection = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  border: 1px solid black;
  padding: 10rem 2rem;

  background-image: url('/img/booth/profit/profit-background.png');
  background-repeat: no-repeat;
  background-size: cover;

  z-index: 10;
`;

const Title = styled.h1`
  width: 100%;

  text-align: center;
  ${theme.fontStyles.head1}
`;

const Pointer = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  ${({ left, top }) => `left: ${left}; top:${top};`}
  background-image: ${({ number }) => `url(/img/booth/pointer${number}.png)`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  cursor: pointer;
`;

const MapSize = styled.div`
  width: 33.5rem;
  height: 20rem;

  background-size: contain;
  background-repeat: no-repeat;
`;

const BoothMap = styled(MapSize)`
  background-image: url('/public/img/booth/profit/booth-profit-map.png');

  margin-top: 3.6rem;
  margin-bottom: 3.6rem;
  z-index: 2;
`;
const BoothDetail = styled(MapSize)`
  position: relative;
  background-image: url('/public/img/booth/profit/booth-profit-detail.png');

  margin-bottom: 8rem;
  z-index: 2;
`;

const BoothSummaryWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 10rem;

  border: 1px solid black;

  p {
    color: black;
  }
`;

export default Profit;
