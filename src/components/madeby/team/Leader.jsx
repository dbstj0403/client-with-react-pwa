import styled from 'styled-components';
import theme from '@/styles/theme';
import { Member } from '../Member';
import taehwiImg from '@/assets/image/madeby/profile/태휘.jpg';

export function Leader() {
  return (
    <TeamInst>
      <HeadTitle>총괄</HeadTitle>
      <Spacing height={6} />
      <Member
        profileimg={taehwiImg}
        name={'이태휘'}
        major={'컴퓨터공학과 18'}
        inst={'BTS 봉준호 손흥민 멋사 렛츠고'}
        insta={'taehwi_lee'}
        github={'THLcode'}
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

const Spacing = styled.div`
  height: ${(props) => `${props.height}` + 'rem'};
`;
