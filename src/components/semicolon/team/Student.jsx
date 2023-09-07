import theme from '@/styles/theme';
import styled from 'styled-components';
import { SemicolonMember } from '../SemicolonMember';

export function Student() {
  return (
    <TeamInst>
      <HeadTitle>학생복지위원회</HeadTitle>
      <Spacing height={1} />
      <Spacing height={6} />
      <SemicolonMember name={'권오진'} major={'캠퍼스자율전공 22'} inst={'학생복지위원장'} />
      <Spacing height={6} />
      <SemicolonMember name={'김수연'} major={'교육학과 22'} inst={'학생복지위원'} />
      <Spacing height={6} />
      <SemicolonMember name={'이서연'} major={'금속조형디자인과 23'} inst={'학생복지위원'} />
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
