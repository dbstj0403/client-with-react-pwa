import theme from '@/styles/theme';
import styled from 'styled-components';
import { SemicolonMember } from '../SemicolonMember';

export function Graduate() {
  return (
    <TeamInst>
      <HeadTitle>졸업준비위원회</HeadTitle>
      <Spacing height={0.8} />
      <BodyText>
        홍익대학교 졸업예정자들을 위한
        <br />
        업무를 총괄 담당하며,
        <br />
        졸업 관련 제반 업무를 집행합니다.
      </BodyText>
      <Spacing height={6} />
      <SemicolonMember name={'김지호'} major={'전자전기공학부 18'} inst={'졸업준비위원장'} />
      <Spacing height={4.8} />
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

const BodyText = styled.div`
  padding-top: 1.6rem;
  color: #a4a4a4;
  ${theme.fontStyles.body1};
  text-align: center;
`;
