import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeletePubs({ pubId }) {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ['deletePub', pubId],
    mutationFn: async () => {
      const res = await axiosInstance.delete(`/api/pubs/${pubId}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['getPubs'],
      });
    },
  });

  return {
    deletePub: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
