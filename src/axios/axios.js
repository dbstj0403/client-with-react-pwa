import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACK_SERVER,
});

axiosInstance.interceptors.request.use(async (config) => {
  if (!config.headers) {
    return config;
  }

  /** 관리자 로그인과 GET 요청시에는 access_token 추가할 필요 없음 */
  if (config.url === '/api/v1/auth/kakao/login' || config.method === 'get') {
    return config;
  }

  /** 관리자 로그인 제외한 POST 요청에는 access_token 필요 */
  const token = await localStorage.getItem('access_token');

  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
