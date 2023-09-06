import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { title, slogan1, year, period } from '../../constants/slogan';
import theme from '../../styles/theme';

function Landing(props) {
  const [top, setTop] = useState(0);
  const [fix, setFix] = useState(false);

  const handleScroll = () => {
    if (props.scroll >= 0 && props.scroll <= 20) {
      setFix(false);
      setTop(0);
    } else if (props.scroll > 20 && props.scroll <= 160) {
      setFix(false);
      setTop(-props.scroll + 260);
    } else {
      setFix(true);
      setTop(100);
    }
  };

  const calculateTop = () => {
    if (window.innerWidth < 450) {
      return '-6rem';
    } else if (window.innerWidth < 600) {
      return '-3rem';
    } else {
      return '0';
    }
  };

  useEffect(() => {
    handleScroll();
  }, [props.scroll]);

  return (
    <Container scroll={top} top={calculateTop()} fix={fix ? 1 : 0} display={props.scroll < 1800 ? 1 : 0}>
      <TitleSection>
        <Hwayangyeonhwa src="/img/Hwayangyeonhwa.png" />
        <Background>
          <Year>{year}</Year>
          <Title>{title}</Title>
          <Period>{period}</Period>
        </Background>
      </TitleSection>
      <SloganSection>{slogan1}</SloganSection>
      <Aside>
        <Image />
      </Aside>
    </Container>
  );
}

export default Landing;

const Container = styled.section`
  max-width: 76.8em;
  width: 100%;
  display: ${(props) => (props.display ? 'block' : 'none')};
  position: ${(props) => (props.fix ? 'fixed' : 'relative')};
  top: ${(props) => (!props.fix ? `${props.scroll / 10}rem` : props.top)};
  height: 84rem;

  padding: 8.9rem 3.4rem 10.8rem 3.4rem;
  background-color: ${theme.colors.black};
`;

const TitleSection = styled.section`
  position: relative;
  width: 100%;
`;

const Hwayangyeonhwa = styled.img`
  position: absolute;
  top: 84%;
  width: 100%;
  z-index: 4;
`;

const Background = styled.div`
  width: 24.7rem;
  height: 30.8rem;
  margin: 0 auto;
  padding: 9.6rem 1.9rem 4.8rem 1.9rem;

  background: url('/img/main-background.png') center center no-repeat;
  background-blend-mode: hard-light;
`;

const Year = styled.header`
  font-family: 'SUIT Variable';
  ${theme.fontStyles.head3};
  background: linear-gradient(180deg, ${theme.colors.white} 0%, rgba(255, 255, 255, 0) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const Title = styled.header`
  color: ${theme.colors.white};
  ${theme.fontStyles.head2};

  text-align: center;
  white-space: pre-line;
`;

const Period = styled.div`
  color: ${theme.colors.white};
  font-family: 'SUIT Variable';
  ${theme.fontStyles.head3};

  text-align: center;
`;

const SloganSection = styled.section`
  margin: 1.7rem 0;

  background: linear-gradient(0deg, ${theme.colors.white} 0%, rgba(255, 255, 255, 0) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${theme.fontStyles.subHead2};

  text-align: center;
  white-space: pre-line;
`;

const Aside = styled.aside`
  width: 100%;
  height: 24.8rem;
  padding: 0 0.0133rem 0.0351rem 0.1rem;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url('/img/main-background.png') center center no-repeat;
  background-size: contain;
  transform: rotate(-87.845deg);
  background-blend-mode: hard-light;
`;
