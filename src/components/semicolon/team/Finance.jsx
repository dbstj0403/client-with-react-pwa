import theme from '@/styles/theme';
import styled from 'styled-components';
import { SemicolonMember } from '../SemicolonMember';

export function Finance() {
  return (
    <TeamInst>
      <HeadTitle>재정사무국</HeadTitle>
      <Spacing height={0.8} />

      <BodyText>총학생회의 회계와 사무 업무를 담당합니다.</BodyText>
      <Spacing height={6} />
      <SemicolonMember name={'윤서연'} major={'경영학과 22'} inst={'재정사무국장'} />
      <Spacing height={4.8} />
      <SemicolonMember name={'박정범'} major={'산업데이터공학과 23'} inst={'재정사무국원'} />
      <Spacing height={4.8} />
      <SemicolonMember name={'박채원'} major={'전자전기공학부 23'} inst={'재정사무국원'} />
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
