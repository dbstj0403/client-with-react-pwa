import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/axios/axios';

export default function useGetPromotionBooths() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['getPromotionsBooths'],
    queryFn: async () => {
      const res = await axiosInstance.get('/api/api/promotions');
      return res.data.data.promotions;
    },
  });

  return {
    booths: data || [],
    isLoading,
    error,
  };
}
