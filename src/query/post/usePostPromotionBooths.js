import { axiosInstance } from '@/axios/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function usePostPromotionBooths() {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess, isError } = useMutation({
    mutationKey: ['addPromotionBooth'],
    mutationFn: async (data) => {
      const res = await axiosInstance.post('/api/api/promotions', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['getPromotionsBooths'],
      });
    },
  });

  return {
    addPromotionBooth: mutate,
    isLoading,
    isSuccess,
    isError,
    error,
    data,
  };
}
