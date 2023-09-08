import theme from '@/styles/theme';
import styled from 'styled-components';
import { SemicolonMember } from '../SemicolonMember';

export function Student() {
  return (
    <TeamInst>
      <HeadTitle>학생복지위원회</HeadTitle>
      <Spacing height={0.8} />
      <BodyText>
        홍익대학교 학우들의 복지 증진을 위한
        <br />
        제반 업무를 담당합니다.
      </BodyText>

      <Spacing height={6} />
      <SemicolonMember name={'권오진'} major={'캠퍼스자율전공 22'} inst={'학생복지위원장'} />
      <Spacing height={4.8} />
      <SemicolonMember name={'김수연'} major={'교육학과 22'} inst={'학생복지위원'} />
      <Spacing height={4.8} />
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

const BodyText = styled.div`
  padding-top: 1.6rem;
  color: #a4a4a4;
  ${theme.fontStyles.body1};
  text-align: center;
`;
