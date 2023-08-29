import styled from 'styled-components';
import React from 'react';

function InfoCard() {
  return (
    <InfoContainer>
      <TriangleContainer>
        <TopTriangle />
      </TriangleContainer>
      <InfoBox height="15rem" backgroundColor="#0075ff"></InfoBox>
      <InfoBox height="15rem" backgroundColor="#D9EAFC"></InfoBox>
      <InfoBox height="22.2rem" backgroundColor="#0075ff"></InfoBox>
      <InfoBox height="15rem" backgroundColor="#D9EAFC"></InfoBox>
      <TriangleContainer>
        <BottomTriangle />
      </TriangleContainer>
    </InfoContainer>
  );
}
export default InfoCard;
const InfoContainer = styled.div`
  margin-top: 2rem;
  border: 1px solid;
  width: 33.5rem;
  height: 83.2rem;
`;
const TriangleContainer = styled.div`
  width: 33.5rem;
  height: 8rem;
  overflow: hidden;
`;
const TopTriangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 4rem solid #045aff;
  border-left: 19rem solid transparent;
  border-right: 1rem solid transparent;
  padding-top: 4rem;
`;
const InfoBox = styled.div`
  background-color: ${(props) => props.backgroundColor};
  width: 33.5rem;
  height: ${(props) => props.height};
`;
const BottomTriangle = styled.div`
  width: 0;
  height: 0;
  border-top: 4rem solid #045aff;
  border-left: 1rem solid transparent;
  border-right: 18rem solid transparent;
  margin-left: 14.5rem;
`;
