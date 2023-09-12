import theme from '@/styles/theme';
import styled from 'styled-components';
import { useRef } from 'react';
import useLazyLoading from '@/hooks/useLazyLoading';

function Campus(props) {
  const observerRef = useRef(null);
  const loading = useLazyLoading(observerRef);

  const getWidth = () => {
    if (window.innerWidth < 450) {
      return 220;
    } else if (window.innerWidth < 600) {
      return 295;
    } else {
      return 340;
    }
  };
  return (
    <Container ref={observerRef} fix={props.scroll > 20 ? 1 : 0} display={props.scroll < 400 ? 1 : 0}>
      {loading ? (
        <Skeleton src="/img/skeleton1.png" />
      ) : (
        <>
          <Backdrop scroll={props.scroll} width={getWidth()} />
          <Gradient />
          <CampusImage src="https://storage.2023hiufestainfo.com/client/hongikview.gif" alt="hongik" />
        </>
      )}
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
  opacity: ${(props) =>
    props.scroll > 20 && props.scroll < props.width ? (props.scroll - 20) / (props.width - 20) : 0};
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

const Skeleton = styled.img`
  width: 100%;
  height: 19rem;
  object-fit: cover;
  object-position: center center;
`;
