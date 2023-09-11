import { axiosInstance } from '@/axios/axios';
import { useQuery } from '@tanstack/react-query';

export default function useGetPubs(department) {
  // console.log(department);
  const { data, isLoading, error } = useQuery({
    queryKey: ['getPubs', department],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/pubs/${department}`);
      return res.data;
    },
    staleTime: Infinity, // 1분 동안 캐시된 데이터를 사용
  });

  return {
    getPubs: data || null,
    isLoading,
    error,
  };
}
