import { Close } from '@/assets/icons/Close';
import { HongikLogo } from '@/assets/image/HongikLogo';
import { sideState } from '@/libs/store';
import theme from '@/styles/theme';
import { useRecoilState } from 'recoil';
import styled, { keyframes } from 'styled-components';
import SelectItem from './SelectItem';
import { useEffect } from 'react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
    display: none;
  }
  to {
    opacity: 1;
    transform: translateX(0);
    display: block;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
    display: block;
  }
  to {
    opacity: 0;
    transform: translateX(-100%);
    display: none;
  }
`;

const SideBar = ({ innerRef, ...props }) => {
  const [isOpen, setIsOpen] = useRecoilState(sideState);
  const handleClose = (e) => {
    e.stopPropagation(); // 이벤트 전파 막기
    if (isOpen && innerRef.current && !innerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleClose);
    } else {
      window.removeEventListener('click', handleClose);
    }
    return () => {
      window.removeEventListener('click', handleClose);
    };
  }, [isOpen]);

  return (
    <SideBarWrapper isopen={isOpen ? 'true' : 'false'} ref={innerRef} {...props}>
      <Top>
        <HongikLogo />
        <CloseDiv onClick={() => setIsOpen(false)}>
          <Close />
        </CloseDiv>
      </Top>
      <SelectItem />
      <Spacing />
    </SideBarWrapper>
  );
};

export default SideBar;

const SideBarWrapper = styled.div`
  position: fixed;
  width: 29.5rem;
  height: 100%;
  display: ${(props) => (props.isopen === 'true' ? 'block' : 'none')};
  animation: ${(props) => (props.isopen === 'true' ? fadeIn : fadeOut)} 0.4s ease;
  background-color: ${theme.colors.black};
  animation-fill-mode: forwards;
  z-index: 1001;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Top = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 2.4rem 1.6rem 2rem;
  box-sizing: border-box;
`;

const CloseDiv = styled.div`
  margin-left: auto;
`;

const Spacing = styled.div`
  height: 11.1rem;
`;
