import { adminState } from '@/libs/store';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
export default function AuthManager() {
  const setIsAdmin = useSetRecoilState(adminState);

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    const accessToken = localStorage.getItem('access_token');

    if (isAdmin === null || accessToken === null) return;

    /** 관리자로 로그인 했을 경우에만 atom set */
    setIsAdmin(JSON.parse(isAdmin));
  }, [setIsAdmin]);

  return <Outlet />;
}
