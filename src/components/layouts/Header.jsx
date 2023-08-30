import { DrawerIcon } from '@/assets/icons/DrawerIcon';
import { HongikLogo } from '@/assets/image/HongikLogo';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import SideBar from '../sidebar/SideBar';
import { useRecoilState } from 'recoil';
import { sideState } from '@/libs/store';

function Header() {
  const [isOpen, setIsOpen] = useRecoilState(sideState);
  const toggleSide = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <Wrapper>
      <DrawerDiv role="button" onClick={toggleSide}>
        <DrawerIcon />
      </DrawerDiv>
      <LogoWrapper>
        <HongikLogo />
      </LogoWrapper>
      <BackgroundBlur />
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  max-width: 76.8em;
  width: 100%;
  position: fixed;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  z-index: 100;
  ${(props) => props.theme.fontStyles.mainTitle}
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
  width: 100%;
  backdrop-filter: blur(4px);
  background-color: #1616161a;
  z-index: -1;
  height: 6rem;
`;
