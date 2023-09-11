import theme from '@/styles/theme';
import styled from 'styled-components';
import { Member } from '../Member';
import yeojinImg from '@/assets/image/madeby/profile/여진.jpg';

export function Design() {
  return (
    <TeamInst>
      <HeadTitle>디자인</HeadTitle>
      <Spacing height={0.8} />
      <BodyText>
        사용자 중심 사고를 바탕으로 <br />
        UX/UI 디자인을 설계하여 기획자, 개발자와 함께
        <br />
        새로운 서비스를 제작합니다.
      </BodyText>
      <Spacing height={6} />
      <Member
        profileimg={yeojinImg}
        name={'윤여진'}
        major={'시각디자인과 18'}
        inst={'마지막 축제네요… 힘내서 졸업하겠습니다!'}
      />
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

const BodyText = styled.div`
  padding-top: 1.6rem;
  color: #a4a4a4;
  ${theme.fontStyles.body1};
  text-align: center;
`;

const Spacing = styled.div`
  height: ${(props) => `${props.height}` + 'rem'};
`;
