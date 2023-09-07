import theme from '@/styles/theme';
import styled from 'styled-components';
import { SemicolonMember } from '../SemicolonMember';

export function Executives() {
  return (
    <TeamInst>
      <HeadTitle>집행위원회</HeadTitle>
      <Spacing height={1} />
      <Spacing height={6} />
      <SemicolonMember name={'이준화'} major={'건축학부 20'} inst={'집행위원장'} />
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
