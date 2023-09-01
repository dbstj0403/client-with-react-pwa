import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function usePatchPubs({ pubId }) {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ['patchPub', pubId],
    mutationFn: async (data) => {
      const res = await axiosInstance.patch(`/api/pubs/${pubId}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['getPubs'],
      });
    },
  });

  return {
    patchPub: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
