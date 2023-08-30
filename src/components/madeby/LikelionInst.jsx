import theme from '@/styles/theme';
import styled from 'styled-components';

export function LikelionInst() {
  return (
    <>
      <Likelion>
        <HeadTitle>#POSSIBILITY TO REALITY</HeadTitle>
        <BodyText>
          ‘멋쟁이사자처럼’은
          <br />
          창업과 서비스 개발에 대한 독보적인 교육을 통해
          <br />
          자신만만의 테크 기반 아이디어를 실현하는
          <br />
          전국 최대 규모의 대학 연합 IT 동아리입니다.
        </BodyText>
        <BodyText>
          멋쟁이사자처럼 10기와 11기 구성원들이
          <br />
          화양연화; Page 기획 및 개발에 참여하여
          <br />
          2023 홍익대학교 대동제 축제 사이트를
          <br />
          제작하였습니다.
        </BodyText>
      </Likelion>
    </>
  );
}
const Likelion = styled.div`
  margin-top: 7.6rem;
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
  font-size: 1.6rem !important;
`;
