import { GithubLogo } from '@/assets/icons/GithubLogo';
import { InstagramLogo } from '@/assets/icons/InstagramLogo';
import { EtcLogo } from '@/assets/icons/EtcLogo';
import theme from '@/styles/theme';
import styled from 'styled-components';

export function Member({ profileimg, name, major, inst, insta, github, etc }) {
  return (
    <Container>
      <ProfileImg img={profileimg} />
      <Spacing height={1.6} />
      <Name>{name}</Name>
      <Spacing height={0.6} />
      <Major>{major}</Major>
      <Spacing height={1.6} />
      <InstWrap>
        <BorderWrap>
          <Pink />
          <Green />
        </BorderWrap>
        <Spacing height={2.8} />
        <Inst>{inst}</Inst>
      </InstWrap>
      <Spacing height={1.4} />
      <SnsWrap>
        <InstagramLogo id={insta} />
        <GithubLogo id={github} />
        <EtcLogo id={etc} />
      </SnsWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 24.6rem;
  width: 25.1rem;
  justify-content: center;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 7.2rem;
  height: 7.2rem;
  border: none;
  border-radius: 2.4rem;
  background-color: ${theme.colors.white};
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;

const Spacing = styled.div`
  width: ${(props) => (props.width ? `${props.width}` + 'rem' : '1rem')};
  height: ${(props) => (props.height ? `${props.height}` + 'rem' : 0)};
`;

const Name = styled.div`
  ${theme.fontStyles.head5};
`;

const Major = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  padding: 0.6rem 1rem 0.6rem 1rem;
  border-radius: 0.4rem;
  background-color: ${theme.colors.gray800};
  color: #747474;
  ${theme.fontStyles.body5};
`;

const InstWrap = styled.div`
  display: flex;
`;

const BorderWrap = styled.div`
  width: 0.2rem;
  height: 100%;
`;

const Pink = styled.div`
  height: 50%;
  background-color: #ff4bb7;
`;

const Green = styled.div`
  height: 50%;
  background-color: #0efc4b;
`;

const Inst = styled.div`
  ${theme.fontStyles.body1};
  color: #8a8a8a;
`;

const SnsWrap = styled.div`
  display: flex;
`;
