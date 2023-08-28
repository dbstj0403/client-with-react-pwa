import styled from 'styled-components';

function Campus() {
  return <CampusImage src="/img/demo.png" alt="hongik" />;
}

export default Campus;

const CampusImage = styled.img`
  width: 100%;
  height: 52rem;

  object-fit: cover;
`;
