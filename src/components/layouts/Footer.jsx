import React from 'react';
import styled from 'styled-components';
import theme from '@/styles/theme';
import footerimg from '@/assets/image/footerimg.svg';
import { MadeByIcon } from '@/assets/icons/footer/MadeByIcon';
import { Instagram } from '@/assets/icons/footer/Instagram';
import { GoThrough } from '@/assets/icons/footer/GoThrough';
import { useRecoilState } from 'recoil';
import { pageState } from '@/libs/store';

function Footer() {
  const [page, isPage] = useRecoilState(pageState);
  const goToMadeBy = () => {
    window.location.replace('/madeby');
  };

  return (
    <FooterContainer>
      <Spacing height={3.6} />
      <ImgWrap>
        <FooterLogo />
      </ImgWrap>
      <Spacing height={0.8} />
      <GoToMadeBy ismadeby={page} onClick={goToMadeBy}>
        만든이들
        <MadeByIcon />
      </GoToMadeBy>
      <FooterWrap>
        대동제 채널 바로가기
        <Spacing height={1.2} />
        <QuickLink>
          <Instagram />
          <Spacing height={0} />
          <GoThrough />
        </QuickLink>
      </FooterWrap>
      <CopyRight>
        COPYRIGHT 2023 BY LIKELION HONGIK.
        <br />
        ALL RIGHTS RESERVED.
      </CopyRight>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterLogo = styled.div`
  width: 27.1rem;
  height: 14.2rem;
  background-image: url(${footerimg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Spacing = styled.div`
  height: ${(props) => `${props.height}` + 'rem'};
  width: 1.2rem;
`;

const GoToMadeBy = styled.div`
  display: ${(props) => (props.ismadeby === 'madeby' ? 'none' : 'flex')};
  justify-content: center;
  color: ${theme.colors.green};
  cursor: pointer;
  ${theme.fontStyles.body2};
`;

const FooterWrap = styled.div`
  width: 13.3rem;
  margin-top: 9.6rem;
  margin-left: 2.8rem;
  color: #e2e2e2;
  ${theme.fontStyles.body2};
`;

const QuickLink = styled.div`
  display: flex;
  height: 3.2rem;
`;

const CopyRight = styled.div`
  margin-top: 11rem;
  text-align: center;
  color: #656565;
  ${theme.fontStyles.body5};
  margin-bottom: 6rem;
`;
