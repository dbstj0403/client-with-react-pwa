import { axiosInstance } from '@/axios/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function usePatchPromotionBooths({ id }) {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ['patchFoodTruck'],
    mutationFn: async (request) => {
      const res = await axiosInstance.patch(`/api/api/promotions/${id}`, request);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['getPromotionsBooths'],
      });
    },
  });

  return {
    patchPromotionBooth: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
