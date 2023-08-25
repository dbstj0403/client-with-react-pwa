import { DrawerIcon } from '@/assets/icons/DrawerIcon';
import { HongikLogo } from '@/assets/image/HongikLogo';
import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
    console.log(isOpen);
  };

  return (
    <Wrapper>
      <DrawerDiv role="button" onClick={toggleSide}>
        <DrawerIcon />
      </DrawerDiv>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <LogoWrapper>
        <HongikLogo />
      </LogoWrapper>
      <BackgroundBlur />
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  position: sticky;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  z-index: 100;
`;

const DrawerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  margin-left: 2rem;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const BackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -1;
  font-size: 5rem;
  ${(props) => props.theme.fontStyles.mainTitle}
`;
