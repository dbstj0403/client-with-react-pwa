import theme from '@/styles/theme';
import styled from 'styled-components';

export function SemicolonMember({ name, major, inst }) {
  return (
    <Container>
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
  height: 100%;
  width: 25.1rem;
  justify-content: center;
  align-items: center;
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
  height: 2.8rem;
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
