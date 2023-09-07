import theme from '@/styles/theme';
import styled from 'styled-components';
import { SemicolonMember } from '../SemicolonMember';

export function Right() {
  return (
    <TeamInst>
      <HeadTitle>권리연대국</HeadTitle>
      <Spacing height={1} />
      <BodyText>
        홍익대학교 학우들의 권리 실태를 확인하고 <br />
        학교생활중 나타나는 애로사항을 <br />
        개선하기 위한 방안을 모색합니다.
      </BodyText>
      <Spacing height={6} />
      <SemicolonMember name={'김성현'} major={'캠퍼스자율전공 19'} inst={'권리연대국장'} />
      <Spacing height={4.8} />
      <SemicolonMember name={'김소연'} major={'산업데이터공학과 23'} inst={'권리연대국원'} />
      <Spacing height={4.8} />
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

const BodyText = styled.div`
  padding-top: 1.6rem;
  color: #a4a4a4;
  ${theme.fontStyles.body1};
  text-align: center;
`;
