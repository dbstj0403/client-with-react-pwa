import theme from '@/styles/theme';
import styled from 'styled-components';

export function Member({ profileimg, name, major, inst }) {
  return (
    <Container>
      <ProfileImg img={profileimg}></ProfileImg>
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 20rem;
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
  background-repeat: no-repeat;
`;

const Spacing = styled.div`
  width: 1rem;
  height: ${(props) => props.height + 'rem'};
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
  font-size: 1.6rem !important;
  color: #8a8a8a;
`;
