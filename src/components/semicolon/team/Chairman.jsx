import theme from '@/styles/theme';
import styled from 'styled-components';
import { SemicolonMember } from '../SemicolonMember';

export function Chairman() {
  return (
    <TeamInst>
      <HeadTitle>회장단</HeadTitle>
      <Spacing height={1} />
      <Spacing height={6} />
      <SemicolonMember name={'차연수'} major={'조소과 21'} inst={'학생회장'} />
      <Spacing height={6} />
      <SemicolonMember name={'이근형'} major={'국어교육과 21'} inst={'부학생회장'} />
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
