import { axiosInstance } from '@/axios/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteProfitBooths({ id }) {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ['deleteProfitBooth'],
    mutationFn: async () => {
      const res = await axiosInstance.delete(`/api/booth/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['getProfitBooths'],
      });
    },
  });

  return {
    deleteProfitBooth: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
