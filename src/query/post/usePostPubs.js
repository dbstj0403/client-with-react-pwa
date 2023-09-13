import { axiosInstance } from '@/axios/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function usePostPubs(department) {
  console.log(department);
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ['addPub'],
    mutationFn: async (data) => {
      console.log(data);
      const res = await axiosInstance.post('/api/pubs', data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['getPubs', department],
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
