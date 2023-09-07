import React, { useMemo, useRef } from 'react';
import BlackBoothCard from '@/components/booth/BlackBoothCard';

import styled from 'styled-components';

export default function Promotion() {
  const boothFocus = useRef([]);

  const pointers = useMemo(
    () => [
      {
        number: 1,
        top: '7.1rem',
        left: '14.57rem',
      },
      {
        number: 1,
        top: '11.5rem',
        left: '4.72rem',
      },
      {
        number: 1,
        top: '14.8rem',
        left: '4.9rem',
      },
      {
        number: 2,
        top: '7.46rem',
        left: '5.85rem',
      },
      {
        number: 3,
        top: '6.54rem',
        left: '6.65rem',
      },
      {
        number: 4,
        top: '13.75rem',
        left: '17.7rem',
      },
      {
        number: 4,
        top: '8.65rem',
        left: '21.65rem',
      },
      {
        number: 5,
        top: '10.45rem',
        left: '15.62rem',
      },
      {
        number: 5,
        top: '13.75rem',
        left: '18.8rem',
      },
      {
        number: 6,
        top: '11.3rem',
        left: '10.6rem',
      },
      {
        number: 7,
        top: '7.25rem',
        left: '19.55rem',
      },
      {
        number: 8,
        top: '9.85rem',
        left: '18.75rem',
      },
      {
        number: 9,
        top: '15.2rem',
        left: '5.95rem',
      },
    ],
    []
  );

  const booths = useMemo(
    () => [
      {
        number: 1,
        boothName: '포토에이스',
        intro: '운영날짜: 수/목/금',
      },
      {
        number: 2,
        boothName: '질레트',
        intro: '운영날짜 수/목금',
      },
      {
        number: 3,
        boothName: '밝은눈안과',
        intro: '운영날짜: 수/목/금',
      },
      {
        number: 4,
        boothName: '몬스터',
        intro: '운영날짜: 수/목/금',
      },
      {
        number: 5,
        boothName: '예거',
        intro: '운영날짜: 수/목/금',
      },
      {
        number: 6,
        boothName: '켈리',
        intro: '운영날짜: 수/목/금',
      },
      {
        number: 7,
        boothName: '링티',
        intro: '운영날짜: 금',
      },
      {
        number: 8,
        boothName: '상쾌한',
        intro: '운영날짜: 금',
      },
      {
        number: 9,
        boothName: '렌즈미',
        intro: '운영날짜: 금',
      },
    ],
    []
  );

  const onClickPointer = (number) => {
    boothFocus.current[number].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  };
  return (
    <MainSection>
      <Title>프로모션 부스</Title>

      <BoothMap>
        {pointers.map((pointer) => (
          <Pointer
            key={`pointer${pointer.number}`}
            src={`/img/booth/pointer${pointer.number}.png`}
            number={pointer.number}
            left={pointer.left}
            top={pointer.top}
            onClick={() => onClickPointer(pointer.number)}
          />
        ))}
      </BoothMap>

      {booths.map((booth) => (
        <div ref={(el) => (boothFocus.current[booth.number] = el)} key={booth.number}>
          <BlackBoothCard data={booth} variant="primary" />
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
`;

const Title = styled.h1`
  width: 100%;

  text-align: center;
  ${({ theme }) => theme.fontStyles.head1};
`;

const Pointer = styled.img`
  position: absolute;
  width: 2.3rem;
  height: 1.3rem;
  ${({ left, top }) => `left: ${left}; top:${top};`}

  cursor: pointer;
`;

const MapSize = styled.div`
  width: 33.5rem;
  height: 20rem;

  background-size: contain;
  background-repeat: no-repeat;
`;

const BoothMap = styled(MapSize)`
  position: relative;
  background-image: url('/public/img/booth/promotion/promotion-map.jpg');

  margin-top: 3.6rem;
  margin-bottom: 3.6rem;
`;
