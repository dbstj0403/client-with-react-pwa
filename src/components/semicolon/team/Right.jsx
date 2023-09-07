import theme from '@/styles/theme';
import styled from 'styled-components';
import { SemicolonMember } from '../SemicolonMember';

export function Right() {
  return (
    <TeamInst>
      <HeadTitle>권리연대국</HeadTitle>
      <Spacing height={1} />
      <Spacing height={6} />
      <SemicolonMember name={'김성현'} major={'캠퍼스자율전공 19'} inst={'권리연대국장'} />
      <Spacing height={6} />
      <SemicolonMember name={'김소연'} major={'산업데이터공학과 23'} inst={'권리연대국원'} />
      <Spacing height={6} />
      <SemicolonMember name={'최가영'} major={'법학부 23'} inst={'권리연대국원'} />
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
