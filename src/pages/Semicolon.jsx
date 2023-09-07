import { pageState } from '@/libs/store';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import scInst from '@/assets/image/semicolon/scInst.svg';
import scLogo from '@/assets/image/semicolon/sclogo.svg';
import scstyle from '@/assets/image/Semicolon/scstyle.svg';
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
import MoveToTopBtn from '@/components/common/btn/MoveToTopBtn';

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
      <Spacing height={4} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ForStyling />
      </div>
      <Spacing height={1.2} />
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
      <MoveToTopBtn />
    </MadeByContainer>
  );
}

export default Semicolon;

const MadeByContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Inst = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InstText = styled.div`
  position: absolute;
  width: 20.2rem;
  height: 8.4rem;
  background-image: url(${scInst});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 12rem;
`;

const InstLogo = styled.div`
  width: 14.8rem;
  height: 14.8rem;
  margin-top: 18.1rem;
  background-image: url(${scLogo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
`;

const ForStyling = styled.div`
  width: 37.5rem;
  height: 2.4rem;
  background-image: url(${scstyle});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Spacing = styled.div`
  height: ${(props) => `${props.height}` + 'rem'};
`;
