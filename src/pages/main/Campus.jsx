import theme from '@/styles/theme';
import styled from 'styled-components';

function Campus(props) {
  return (
    <Container fix={props.scroll > 20 ? 1 : 0}>
      <Backdrop scroll={props.scroll} />
      <CampusImage src="/img/demo.png" alt="hongik" />
    </Container>
  );
}

export default Campus;

const Container = styled.div`
  position: ${(props) => (props.fix ? 'fixed' : 'relative')};
  top: ${(props) => (props.fix ? '-2.1rem' : 0)};
  width: 100%;
  height: 24rem;
`;

const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 24rem;
  background-color: ${theme.colors.background};
  opacity: ${(props) => (props.scroll < 100 && props.scroll > 20 ? (props.scroll - 20) / 100 : 0)};
`;

const CampusImage = styled.img`
  width: 100%;
  height: 24rem;
  object-fit: cover;
`;
