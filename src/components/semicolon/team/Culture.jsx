import theme from '@/styles/theme';
import styled from 'styled-components';
import { SemicolonMember } from '../SemicolonMember';

export function Culture() {
  return (
    <TeamInst>
      <HeadTitle>문화기획국</HeadTitle>
      <Spacing height={0.8} />
      <BodyText>
        홍익대학교 학우들의 기억에 남을 수 있는
        <br />
        문화 콘텐츠의 기획 및 집행을 담당합니다.
      </BodyText>
      <Spacing height={6} />
      <SemicolonMember name={'곽도현'} major={'법학부 21'} inst={'문화기획국장'} />
      <Spacing height={4.8} />
      <SemicolonMember name={'김도하'} major={'기계시스템디자인공학과 21'} inst={'문화기획국원'} />
      <Spacing height={4.8} />
      <SemicolonMember name={'류호진'} major={'경영학과 22'} inst={'문화기획국원'} />
      <Spacing height={4.8} />
      <SemicolonMember name={'최윤서'} major={'경영학과 22'} inst={'문화기획국원'} />
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
