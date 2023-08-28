import { GoThrough } from '@/assets/icons/footer/GoThrough';
import { HILogo } from '../../assets/icons/footer/HILogo';
import { Instagram } from '@/assets/icons/footer/Instagram';
import { LikelionLogo } from '@/assets/icons/footer/LikelionLogo';
import React, { useEffect } from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Wrapper>
      <HILogo />
      <LikelionLogo />
      <Instagram />
      <GoThrough />
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  background-color: #d9d9d9;
  height: 11.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
