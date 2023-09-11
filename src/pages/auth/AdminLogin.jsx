import React from 'react';
import styled from 'styled-components';

export default function AdminLogin() {
  /** kako RestAPI key */
  const API_KEY = import.meta.env.VITE_KAKAO_API_KEY;
  /** kako login redirect url */
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  /** 카카오 로그인 화면으로 이동 */
  const onClick = () => {
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoURL;
  };

  return (
    <Container>
      <span>관리자 로그인</span>
      <LoginButton onClick={onClick} />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  margin-top: 10rem;
  height: 20rem;

  span {
    ${({ theme }) => theme.fontStyles.head4};
  }
`;

const LoginButton = styled.button`
  width: 18rem;
  height: 3rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('/img/kakao_login_medium_wide.png');
`;
