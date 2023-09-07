import theme from '@/styles/theme';
import styled from 'styled-components';
import { SemicolonMember } from '../SemicolonMember';

export function Graduate() {
  return (
    <TeamInst>
      <HeadTitle>졸업준비위원회</HeadTitle>
      <Spacing height={1} />
      <Spacing height={6} />
      <SemicolonMember name={'김지호'} major={'전자전기공학부 18'} inst={'졸업준비위원장'} />
      <Spacing height={6} />
      <SemicolonMember name={'안아영'} major={'법학부 21'} inst={'졸업준비사무장'} />
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
