import { axiosInstance } from '@/axios/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeletePromotionBooths({ id }) {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ['deleteProfitBooth'],
    mutationFn: async () => {
      const res = await axiosInstance.delete(`/api/api/promotions/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['getPromotionsBooths'],
      });
    },
  });

  return {
    deletePromotionBooth: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
