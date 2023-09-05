import theme from '@/styles/theme';
import styled from 'styled-components';
import { Member } from '../Member';
import hanahImg from '@/assets/image/madeby/profile/한아.jpg';

export function Manage() {
  return (
    <TeamInst>
      <HeadTitle>기획</HeadTitle>
      <Spacing height={0.8} />
      <BodyText>
        사용자 중심 사고를 바탕으로
        <br />
        서비스 기획 및 디자인 등 일련의 과정을 통하여
        <br />
        실제 서비스를 기획합니다.
      </BodyText>
      <Spacing height={6} />
      <Member profileimg={''} name={'박신영'} major={'예술학과 17'} inst={'여기까지가 20자입니다 여러분 여기까'} />
      <Spacing height={4.8} />
      <Member
        profileimg={hanahImg}
        name={'주한아'}
        major={'경영학과 19'}
        inst={'ESFJ 기획자'}
        insta={'lesensdehanah'}
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
