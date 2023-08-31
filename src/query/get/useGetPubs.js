import { useQuery } from '@tanstack/react-query';

export default function useGetPubs() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['getPubs'],
    queryFn: async () => {
      const res = await axiosInstance.get('/api/pubs');
      return res.data;
    },
  });

  return {
    getPubs: data || null,
    isLoading,
    error,
  };
}
