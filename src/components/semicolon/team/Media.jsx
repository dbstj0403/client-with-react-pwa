import theme from '@/styles/theme';
import styled from 'styled-components';
import { SemicolonMember } from '../SemicolonMember';

export function Media() {
  return (
    <TeamInst>
      <HeadTitle>미디어홍보국</HeadTitle>
      <Spacing height={1} />
      <Spacing height={6} />
      <SemicolonMember name={'황예지'} major={'시각디자인과 21'} inst={'미디어홍보국장'} />
      <Spacing height={6} />
      <SemicolonMember name={'김유나'} major={'시각디자인과 21'} inst={'미디어홍보국원'} />
      <Spacing height={6} />
      <SemicolonMember name={'고가은'} major={'시각디자인과 21'} inst={'미디어홍보국원'} />
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
