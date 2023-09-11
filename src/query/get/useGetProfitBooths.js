import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/axios/axios';

export default function useGetProfitBooths() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['getProfitBooths'],
    queryFn: async () => {
      const res = await axiosInstance.get('/api/booths');
      return res.data.booth;
    },
  });

  return {
    booths: data || [],
    isLoading,
    error,
  };
}
