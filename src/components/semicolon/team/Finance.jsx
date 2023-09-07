import theme from '@/styles/theme';
import styled from 'styled-components';
import { SemicolonMember } from '../SemicolonMember';

export function Finance() {
  return (
    <TeamInst>
      <HeadTitle>재정사무국</HeadTitle>
      <Spacing height={1} />
      <Spacing height={6} />
      <SemicolonMember name={'윤서연'} major={'경영학과 22'} inst={'재정사무국장'} />
      <Spacing height={6} />
      <SemicolonMember name={'박정범'} major={'산업데이터공학과 23'} inst={'재정사무국원'} />
      <Spacing height={6} />
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
