import { axiosInstance } from '@/axios/axios';
import { useQuery } from '@tanstack/react-query';

export default function useGetPubs() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['getDjInfo'],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/festival/schedules`);
      return res.data;
    },
  });

  return {
    getPubs: data || null,
    isLoading,
    error,
  };
}
