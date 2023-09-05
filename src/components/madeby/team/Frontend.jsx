import styled from 'styled-components';
import theme from '@/styles/theme';
import { Member } from '../Member';
import jinhoImg from '@/assets/image/madeby/profile/진호.jpg';
import youngunImg from '@/assets/image/madeby/profile/용운.jpg';
import hyeonminImg from '@/assets/image/madeby/profile/현민.jpg';
import yunseoImg from '@/assets/image/madeby/profile/윤서.jpg';

export function Frontend() {
  return (
    <TeamInst>
      <HeadTitle>프론트엔드</HeadTitle>
      <Spacing height={0.8} />
      <BodyText>
        API에서 불러온 데이터의 출력 및 입력을 통한
        <br />
        비즈니스 로직 구성과 사용자 인터페이스에 대한
        <br />
        작업을 수행합니다.
      </BodyText>
      <Spacing height={6} />
      <Member
        profileimg={youngunImg}
        name={'계용운'}
        major={'컴퓨터공학과 17'}
        inst={'github/@yongun2'}
        github={'yongun2'}
      />
      <Spacing height={4.8} />
      <Member
        profileimg={jinhoImg}
        name={'김진호'}
        major={'경영학과 17'}
        inst={'ESFJ 개발자입니다 흔치 않죠^!^'}
        insta={'jinokim98'}
        github={'jinhokim98'}
      />
      <Spacing height={4.8} />
      <Member
        profileimg={hyeonminImg}
        name={'김현민'}
        major={'컴퓨터공학과 18'}
        inst={'최고가 되고싶은 개발자 김현민입니다.'}
      />
      <Spacing height={4.8} />
      <Member
        profileimg={''}
        name={'김초연'}
        major={'컴퓨터공학과 21'}
        inst={''}
        insta={'keep_cy'}
        // github={'choyeon2e'}
        etc={'https://velog.io/@choyeon2e'}
      />
      <Spacing height={4.8} />
      <Member
        profileimg={yunseoImg}
        name={'원윤서'}
        major={'컴퓨터공학과 21'}
        inst={'뉴진스 우원재… 그리고 멋사 🦁'}
        insta={'lov2loveluv'}
        github={'dbstj0403'}
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
