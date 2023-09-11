import { axiosInstance } from '@/axios/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function usePostProfitBooths() {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess, isError } = useMutation({
    mutationKey: ['addProfitBooth'],
    mutationFn: async (data) => {
      const res = await axiosInstance.post('/api/booth', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['getProfitBooths'],
      });
    },
  });

  return {
    addProfitBooth: mutate,
    isLoading,
    isSuccess,
    error,
    data,
    isError,
  };
}
