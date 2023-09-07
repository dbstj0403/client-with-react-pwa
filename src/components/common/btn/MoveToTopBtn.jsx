import React from 'react';
import styled from 'styled-components';
import moveTopBtnIcon from '@/assets/icons/moveToTopBtnIcon.svg';
import { useState, useEffect } from 'react';
import theme from '@/styles/theme';

function MoveToTopBtn() {
  const [showBtn, setShowBtn] = useState(false);
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const ShowBtnCLick = () => {
      if (window.scrollY > 800) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener('scroll', ShowBtnCLick);
    return () => {
      window.removeEventListener('scroll', ShowBtnCLick);
    };
  }, []);
  return (
    <>
      {showBtn && (
        <Btn onClick={goToTop}>
          <img src={moveTopBtnIcon} alt="" />
          <BtnText>맨 위로</BtnText>
        </Btn>
      )}
    </>
  );
}

export default MoveToTopBtn;
const Btn = styled.button`
  width: 11.2rem;
  height: 4.8rem;
  border-radius: 4rem;
  box-shadow: 0px 0px 4px 0px rgba(255, 255, 255, 0.4) inset;
  position: fixed;
  bottom: 0.5rem;
  z-index: 10;
  padding: 1.2rem 2rem 1.2rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  margin-bottom: 3rem;
  margin-top: 3rem;
  img {
    width: 2.4rem;
    height: 2.4rem;
    padding-right: 0.2rem;
  }
  display: flex;
  justify-content: space-between;
`;
const BtnText = styled.p`
  ${theme.fontStyles.subHead1};
  text-align: left;
`;
