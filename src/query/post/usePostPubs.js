import { axiosInstance } from '@/axios/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function usePostPubs() {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ['addPub'],
    mutationFn: async (data) => {
      const res = await axiosInstance.post('/api/pubs', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['getPubs'],
      });
    },
  });

  return {
    addPub: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
