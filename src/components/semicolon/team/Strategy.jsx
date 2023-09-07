import theme from '@/styles/theme';
import styled from 'styled-components';
import { SemicolonMember } from '../SemicolonMember';

export function Strategy() {
  return (
    <TeamInst>
      <HeadTitle>전략정책국</HeadTitle>
      <Spacing height={1} />
      <Spacing height={6} />
      <SemicolonMember name={'곽민혁'} major={'역사교육과 21'} inst={'전략정책국장'} />
      <Spacing height={6} />
      <SemicolonMember name={'김선정'} major={'역사교육과 23'} inst={'전략정책국원'} />
      <Spacing height={6} />
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
