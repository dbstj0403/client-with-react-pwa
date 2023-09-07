import styled from 'styled-components';
import React from 'react';
import mapImg from '../assets/image/entrance.jpg';

function Entrance() {
  return (
    <Container>
      <Title>관람석 및 공연장 입출구</Title>
      <ImgContainer>
        <img src={mapImg} alt="" />
      </ImgContainer>
    </Container>
  );
}

export default Entrance;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 13rem;
`;
const Title = styled.div`
  margin-top: 3rem;
  ${(props) => props.theme.fontStyles.head1};
  margin-top: 12rem;
  text-align: center;
`;
const ImgContainer = styled.div`
  margin-top: 4rem;
  img {
    width: 33.5rem;
    height: 20rem;
  }
`;
