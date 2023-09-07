import { pageState } from '@/libs/store';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import hiInst from '@/assets/image/madeby/hiInst.svg';
import hiLogo from '@/assets/image/madeby/hilogoinst.svg';
import histyle from '@/assets/image/madeby/forstyle.svg';
import { LikelionInst } from '@/components/madeby/LikelionInst';
import { Manage } from '@/components/madeby/team/Manage';
import { Design } from '@/components/madeby/team/Design';
import { Frontend } from '@/components/madeby/team/Frontend';
import { Backend } from '@/components/madeby/team/Backend';
import { Leader } from '@/components/madeby/team/Leader';

function MadeBy() {
  const [page, isPage] = useRecoilState(pageState);
  useEffect(() => {
    isPage('madeby');
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
      <LikelionInst />
      <Spacing height={12} />
      <Leader />
      <Spacing height={14.8} />
      <Manage />
      <Spacing height={14.8} />
      <Design />
      <Spacing height={14.8} />
      <Frontend />
      <Spacing height={14.8} />
      <Backend />
      <Spacing height={32} />
    </MadeByContainer>
  );
}

export default MadeBy;

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

const ForStyling = styled.div`
  width: 37.5rem;
  height: 2.4rem;
  background-image: url(${histyle});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Spacing = styled.div`
  height: ${(props) => `${props.height}` + 'rem'};
`;
