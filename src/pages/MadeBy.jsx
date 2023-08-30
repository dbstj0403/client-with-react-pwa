import { pageState } from '@/libs/store';
import theme from '@/styles/theme';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import hiInst from '@/assets/image/madeby/hiInst.svg';
import hiLogo from '@/assets/image/madeby/hilogoinst.svg';

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
      <LikelionInst>
        <HeadTitle>#POSSIBILITY TO REALITY</HeadTitle>
        <BodyText>
          ‘멋쟁이사자처럼’은
          <br />
          창업과 서비스 개발에 대한 독보적인 교육을 통해
          <br />
          자신만만의 테크 기반 아이디어를 실현하는
          <br />
          전국 최대 규모의 대학 연합 IT 동아리입니다.
        </BodyText>
        <BodyText>
          멋쟁이사자처럼 10기와 11기 구성원들이
          <br />
          화양연화; Page 기획 및 개발에 참여하여
          <br />
          2023 홍익대학교 대동제 축제 사이트를
          <br />
          제작하였습니다.
        </BodyText>
      </LikelionInst>
      <Spacing height={12} />
      <TeamInst>
        <HeadTitle>기획팀</HeadTitle>
        <Spacing height={0.8} />
        <BodyText>
          사용자 중심 사고를 바탕으로
          <br />
          서비스 기획 및 디자인 등 일련의 과정을 통하여
          <br />
          실제 서비스를 기획합니다.
        </BodyText>
      </TeamInst>
    </MadeByContainer>
  );
}

export default MadeBy;

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

const LikelionInst = styled.div`
  margin-top: 7.6rem;
  height: 28.8rem;
  text-align: center;
`;

const HeadTitle = styled.div`
  ${theme.fontStyles.head5};
`;

const BodyText = styled.div`
  padding-top: 1.6rem;
  color: #a4a4a4;
  font-size: 1.6rem;
  font-family: 'Pretendard Variable';
  line-height: 2.8rem;
  font-weight: 400;
`;

const Spacing = styled.div`
  height: ${(props) => `${props.height}` + 'rem'};
`;

const TeamInst = styled.div`
  text-align: center;
`;
