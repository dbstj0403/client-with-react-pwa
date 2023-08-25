import { DrawerIcon } from '@/assets/icons/DrawerIcon';
import { HongikLogo } from '@/assets/image/HongikLogo';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import SideBar from './sidebar/SideBar';
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
  position: sticky;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* backdrop-filter: blur(4px); */
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -1;
  font-size: 5rem;
`;
