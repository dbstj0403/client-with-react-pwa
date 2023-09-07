import { Inst } from '@/assets/image/semicolon/Inst';
import theme from '@/styles/theme';
import styled from 'styled-components';

export function SemicolonInst() {
  return (
    <>
      <Semicolon>
        <Inst />
        <BodyText>
          홍익대학교 총학생회 'SEMICOLON'은
          <br />
          민주적이고 자주적인 학생 자치 활동을 통해
          <br />
          안으로는 홍익인들의 이해와 요구를 실현하며,
        </BodyText>
        <BodyText>
          나아가 대학의 건학정신인 홍익인간의 이념을
          <br />
          바탕으로 사회발전에 능동적으로 기여함을
          <br />그 목적으로 합니다.
        </BodyText>
      </Semicolon>
    </>
  );
}
const Semicolon = styled.div`
  margin-top: 1.2rem;
  height: 28.8rem;
  text-align: center;
`;

const HeadTitle = styled.div`
  ${theme.fontStyles.head5};
`;

const BodyText = styled.div`
  padding-top: 1.6rem;
  color: #a4a4a4;
  ${theme.fontStyles.body1};
`;
