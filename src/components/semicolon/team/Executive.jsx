import theme from '@/styles/theme';
import styled from 'styled-components';
import { SemicolonMember } from '../SemicolonMember';

export function Executive() {
  return (
    <TeamInst>
      <HeadTitle>집행국</HeadTitle>
      <Spacing height={1} />
      <Spacing height={6} />
      <SemicolonMember name={'김태희'} major={'역사교육과 21'} inst={'집행국원'} />
      <Spacing height={6} />
      <SemicolonMember name={'안준현'} major={'기계시스템디자인공학과 20'} inst={'집행국원'} />
      <Spacing height={6} />
      <SemicolonMember name={'양현서'} major={'경제학부 19'} inst={'집행국원'} />
      <Spacing height={6} />
      <SemicolonMember name={'조준혁'} major={'전자전기공학부 19'} inst={'집행국원'} />
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
