import theme from '@/styles/theme';
import styled from 'styled-components';
import { SemicolonMember } from '../SemicolonMember';

export function Media() {
  return (
    <TeamInst>
      <HeadTitle>미디어홍보국</HeadTitle>
      <Spacing height={0.8} />
      <BodyText>
        총학생회 업무의 진행 상황 및 결과 등의 정보를
        <br />
        학우들에게 보다 신속하고 가시적으로 전달하기 위한
        <br />
        뉴스레터 형식의 카드 뉴스를 제작합니다.
      </BodyText>
      <Spacing height={6} />
      <SemicolonMember name={'황예지'} major={'시각디자인과 21'} inst={'미디어홍보국장'} />
      <Spacing height={4.8} />
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

const BodyText = styled.div`
  padding-top: 1.6rem;
  color: #a4a4a4;
  ${theme.fontStyles.body1};
  text-align: center;
`;
