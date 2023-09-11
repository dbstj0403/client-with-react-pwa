import { axiosInstance } from '@/axios/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function usePatchProfitBooths({ id }) {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ['patchFoodTruck'],
    mutationFn: async (request) => {
      const res = await axiosInstance.patch(`/api/booth/${id}`, request);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['getProfitBooths'],
      });
    },
  });

  return {
    patchProfitBooth: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
