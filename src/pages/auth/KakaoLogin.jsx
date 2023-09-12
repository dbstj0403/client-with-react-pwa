import { axiosInstance } from '@/axios/axios';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
axiosInstance;

export default function KakaoLogin() {
  const location = useLocation();

  useEffect(() => {
    /** 인가 코드 추출하기 */
    const code = new URLSearchParams(location.search).get('code');
    /** kakao redirect uri */
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

    /**
     * API_KEY: 카카오 REST API 키
     * CLIENT_SECRET: 카카오 CLIENT SECRET 키
     */

    const API_KEY = import.meta.env.VITE_KAKAO_API_KEY;
    const CLIENT_SECRET = import.meta.env.VITE_KAKAO_SECRET;
    const grantType = 'authorization_code';

    /** id_token 받아올 때는 커스텀 되지 않은 axios 사용*/
    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${API_KEY}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {},
        { headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' } }
      )
      .then((res) => {
        const { id_token } = res.data;
        /** 서버 로그인 요청은 custom axios 사용 */
        axiosInstance
          .post(
            '/api/v1/auth/kakao/login',
            {},
            {
              params: { idtoken: id_token },
            }
          )
          .then((res) => {
            const { isRegistered, accessToken } = res.data.data;

            console.log(res);
            /** 등록된 관리자가 아닐 경우 */
            if (!isRegistered) {
              alert('등록되지 않은 관리자입니다. 관리자에게 등록을 요청해 주세요.');
              window.location.replace('/');
              return;
            }

            alert('로그인 성공!');
            /**
             * 관리자로 로그인 성공할 경우
             * 로컬스토리지에 accessToken, isAdmin 저장
             */
            window.localStorage.setItem('access_token', accessToken);
            window.localStorage.setItem('isAdmin', isRegistered);
            window.location.replace('/');
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }, [location.search]);

  return <div>KakaoLogin</div>;
}
