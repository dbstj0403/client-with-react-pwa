import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteFoodTrucks({ id }) {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ['deleteFoodTruck'],
    mutationFn: async () => {
      const res = await axiosInstance.delete(`/api/foodtrucks/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['getFoodTrucks'],
      });
    },
  });

  return {
    deleteFoodTruck: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
