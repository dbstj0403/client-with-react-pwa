import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';

export default function PubCard({ data }) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <PubCardWrapper data-aos={data.page === 1 ? 'flip-left' : 'flip-right'} data-aos-duration="1500" data-aos-once>
      <PubCardImage image={data.image}>
        {data.page === 1 ? (
          <PubCardFold1>
            <span>{data.position}</span>
          </PubCardFold1>
        ) : (
          <PubCardFold2>
            <span>{data.position}</span>
          </PubCardFold2>
        )}
      </PubCardImage>
      <PubCardTextWrapper>
        <PubOwner>{data.owns}</PubOwner>
        <PubPosition>
          <PubPage isPageOne={data.page === 1}>
            <span>Page {data.page}</span>
          </PubPage>
          <DevideCircle />
          <span>{data.position}</span>
        </PubPosition>
        <PubMainMenu>{data.mainMenu}</PubMainMenu>
        <PubIntroduce>{data.introduction}</PubIntroduce>
      </PubCardTextWrapper>
    </PubCardWrapper>
  );
}

const PubCardWrapper = styled.div`
  padding: 2.4rem 0;
  height: 17rem;
  display: flex;
`;

const PubCardImage = styled.div`
  width: 11.6rem;
  height: 8rem;
  background-image: url(${(props) => props.image});
  background-size: cover;
  position: relative;
`;

const PubCardFold1 = styled.div`
  width: 0px;
  height: 0px;
  border-right: 3.6rem solid ${(props) => props.theme.colors.green};
  border-left: 0px solid transparent;
  border-top: 3.6rem solid ${(props) => props.theme.colors.background};
  span {
    ${(props) => props.theme.fontStyles.subHead1}
    font-size:1rem;
    line-height: 1rem;
    color: ${(props) => props.theme.colors.white};
    position: absolute;
    top: 2.5rem;
    left: 2.7rem;
  }
`;

const PubCardFold2 = styled.div`
  width: 0px;
  height: 0px;
  border-top: 3.6rem solid #ff89d7;
  border-left: 0px solid transparent;
  border-right: 3.6rem solid ${(props) => props.theme.colors.background};
  position: absolute;
  right: 0;
  bottom: 0;
  span {
    ${(props) => props.theme.fontStyles.subHead1}
    font-size:1rem;
    line-height: 1rem;
    color: ${(props) => props.theme.colors.white};
    position: absolute;
    bottom: 2.4rem;
    left: 0.2rem;
  }
`;

const PubCardTextWrapper = styled.div`
  display: flex;
  margin-left: 1.2rem;
  flex-direction: column;
`;

const PubOwner = styled.span`
  ${(props) => props.theme.fontStyles.subHead1}
`;

const PubPosition = styled.div`
  display: flex;
  align-items: center;
  > span {
    ${(props) => props.theme.fontStyles.body3}
    font-weight:400;
  }
  div {
    margin-right: 0.4rem;
  }
`;

const PubPage = styled.div`
  span {
    color: ${(props) => (props.isPageOne ? props.theme.colors.green : '#FF89D7')};
    ${(props) => props.theme.fontStyles.body3}
    font-weight:400;
  }
  padding: 0 0.4rem;
  border-radius: 0.2rem;
  background-color: ${(props) => (props.isPageOne ? 'rgba(66, 207, 97, 0.20)' : 'rgba(255, 137, 215, 0.20)')};
`;

const DevideCircle = styled.div`
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: #000000;
`;

const PubMainMenu = styled.div`
  ${(props) => props.theme.fontStyles.body3}
  font-weight:400;
  color: ${(props) => props.theme.colors.gray300};
`;

const PubIntroduce = styled.p`
  ${(props) => props.theme.fontStyles.body5}
  color: ${(props) => props.theme.colors.gray400};
`;
