import styled from 'styled-components';
import theme from '@/styles/theme';
import { Member } from '../Member';
import hyewonImg from '@/assets/image/madeby/profile/혜원.jpg';
import hanbiImg from '@/assets/image/madeby/profile/한비.jpg';
import seulgiImg from '@/assets/image/madeby/profile/슬기.jpg';

export function Backend() {
  return (
    <TeamInst>
      <HeadTitle>백엔드</HeadTitle>
      <Spacing height={0.8} />
      <BodyText>
        시스템 설계 및 배포와
        <br />
        서비스 및 데이터의 흐름을 관리하며
        <br />
        전반적인 Life Cycle을 구성합니다.
      </BodyText>
      <Spacing height={6} />
      <Member
        profileimg={seulgiImg}
        name={'김슬기'}
        major={'컴퓨터공학과 19'}
        inst={'컴퓨터공학과 19학번 김슬기입니다'}
      />
      <Spacing height={4.8} />
      <Member
        profileimg={hyewonImg}
        name={'서혜원'}
        major={'컴퓨터공학과 20'}
        inst={'20학번 첫 홍대 축제 넘 기대됩니당'}
      />
      <Spacing height={4.8} />
      <Member
        profileimg={hanbiImg}
        name={'이한비'}
        major={'컴퓨터공학과 21'}
        inst={'축제 재밌게 즐기세용'}
        github={'AlmondBreez3'}
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
