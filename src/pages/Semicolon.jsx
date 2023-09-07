import { pageState } from '@/libs/store';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import hiInst from '@/assets/image/madeby/hiInst.svg';
import hiLogo from '@/assets/image/madeby/hilogoinst.svg';

import { SemicolonInst } from '@/components/semicolon/SemicolonInst';
import { Chairman } from '@/components/semicolon/team/Chairman';
import { Executives } from '@/components/semicolon/team/Executives';
import { Executive } from '@/components/semicolon/team/Executive';
import { Strategy } from '@/components/semicolon/team/Strategy';
import { Media } from '@/components/semicolon/team/Media';
import { Culture } from '@/components/semicolon/team/Culture';
import { Finance } from '@/components/semicolon/team/Finance';
import { Right } from '@/components/semicolon/team/Right';
import { Student } from '@/components/semicolon/team/Student';
import { Graduate } from '@/components/semicolon/team/Graduate';

function Semicolon() {
  const [page, isPage] = useRecoilState(pageState);
  useEffect(() => {
    isPage('semicolon');
  }, []);

  return (
    <MadeByContainer>
      <Inst>
        <InstText />
        <InstLogo />
      </Inst>
      <SemicolonInst />
      <Spacing height={12} />
      <Chairman />
      <Spacing height={14.8} />
      <Executives />
      <Spacing height={14.8} />
      <Executive />
      <Spacing height={14.8} />
      <Strategy />
      <Spacing height={14.8} />
      <Media />
      <Spacing height={14.8} />
      <Culture />
      <Spacing height={14.8} />
      <Finance />
      <Spacing height={14.8} />
      <Right />
      <Spacing height={14.8} />
      <Student />
      <Spacing height={14.8} />
      <Graduate />
      <Spacing height={32} />
    </MadeByContainer>
  );
}

export default Semicolon;

const MadeByContainer = styled.div``;

const Inst = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InstText = styled.div`
  position: absolute;
  width: 20.2rem;
  height: 8.4rem;
  background-image: url(${hiInst});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 12rem;
`;

const InstLogo = styled.div`
  width: 14.8rem;
  height: 14.8rem;
  margin-top: 18.1rem;
  background-image: url(${hiLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
`;

const Spacing = styled.div`
  height: ${(props) => `${props.height}` + 'rem'};
`;
