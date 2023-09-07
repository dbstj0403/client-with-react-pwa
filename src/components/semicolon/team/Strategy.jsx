import theme from '@/styles/theme';
import styled from 'styled-components';
import { SemicolonMember } from '../SemicolonMember';

export function Strategy() {
  return (
    <TeamInst>
      <HeadTitle>전략정책국</HeadTitle>
      <Spacing height={0.8} />
      <BodyText>
        총학생회의 공약을 점검하며
        <br />
        이행도를 검토하고 관련 업무를 보조하고, <br />
        교내 교육환경 및 학생사회 등의 <br />
        현 실태를 파악하여 문제 해결책을 마련하고 <br />
        학교본부와 논의를 지속적으로 진행합니다.
      </BodyText>
      <Spacing height={6} />
      <SemicolonMember name={'곽민혁'} major={'역사교육과 21'} inst={'전략정책국장'} />
      <Spacing height={4.8} />
      <SemicolonMember name={'김선정'} major={'역사교육과 23'} inst={'전략정책국원'} />
      <Spacing height={4.8} />
      <SemicolonMember name={'이지원'} major={'법학부 22'} inst={'전략정책국원'} />
    </TeamInst>
  );
}

const TeamInst = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeadTitle = styled.div`
  ${theme.fontStyles.head3};
`;

const Spacing = styled.div`
  height: ${(props) => `${props.height}` + 'rem'};
`;

const BodyText = styled.div`
  padding-top: 1.6rem;
  color: #a4a4a4;
  ${theme.fontStyles.body1};
  text-align: center;
`;
