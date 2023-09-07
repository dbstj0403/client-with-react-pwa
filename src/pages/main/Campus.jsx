import theme from '@/styles/theme';
import styled from 'styled-components';

function Campus(props) {
  return (
    <Container fix={props.scroll > 20 ? 1 : 0} display={props.scroll < 300 ? 1 : 0}>
      <Backdrop scroll={props.scroll} />
      <Gradient />
      <CampusImage src="/img/hongikview/hongikview.gif" alt="hongik" />
    </Container>
  );
}

export default Campus;

const Container = styled.div`
  display: ${(props) => (props.display ? 'block' : 'none')};
  position: ${(props) => (props.fix ? 'fixed' : 'relative')};
  top: ${(props) => (props.fix ? '-2.1rem' : 0)};
  max-width: 76.8em;
  width: 100%;
  height: 24rem;
`;

const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;

  height: 24rem;
  background-color: ${theme.colors.background};
  opacity: ${(props) => (props.scroll > 20 && props.scroll < 160 ? (props.scroll - 20) / 100 : 0)};
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 24rem;
  z-index: 1;

  background: linear-gradient(#00000000, #000000);
`;

const CampusImage = styled.img`
  position: relative;
  width: 100%;
  height: 24rem;
  object-fit: fill;
`;
