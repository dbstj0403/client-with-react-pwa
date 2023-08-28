import React from 'react';
import styled from 'styled-components';
import { GoThrough } from '@/assets/icons/footer/GoThrough';
import { HILogo } from '@/assets/icons/footer/HILogo';
import { Instagram } from '@/assets/icons/footer/Instagram';
import { LikelionLogo } from '@/assets/icons/footer/LikelionLogo';

function Footer() {
  const goToMadeBy = () => {
    window.location.replace('/madeby');
  };

  return (
    <FooterContainer>
      <Wrap>
        <HILogo />
        <Margin mg={2} />
        <LikelionLogo />
      </Wrap>
      <Wrap pd={2} sz={0.8} isClick onClick={goToMadeBy}>
        만든이들
      </Wrap>
      <Wrap pd={1}>
        <Instagram />
        <Margin mg={1} />
        <GoThrough />
      </Wrap>
      <Wrap pd={1} sz={0.5}>
        Copyright ⓒ Likelion Hongik. All Rights Reserved.
      </Wrap>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #d9d9d9;
  padding: 2rem;
  min-height: 11.8rem;
  font-family: 'Pretendard';
  font-weight: 400;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${(props) => `${props.pd}` + 'rem'};
  font-size: ${(props) => `${props.sz}` + 'rem'};
  cursor: ${(props) => (props.isClick ? 'pointer' : '')};
`;

const Margin = styled.div`
  width: ${(props) => `${props.mg}` + 'rem'};
`;

const TextWrap = styled.div`
  height: 2.1rem;
  margin-top: 4.1rem;
  align-items: center;
  display: flex;
  justify-content: center;
`;
