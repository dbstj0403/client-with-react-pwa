import { axiosInstance } from '@/axios/axios';
import { useQuery } from '@tanstack/react-query';

export default function useGetPubs({ department }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['getPubs', department],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/pubs/${department}`);
      return res.data;
    },
  });

  return {
    getPubs: data || null,
    isLoading,
    error,
  };
}
