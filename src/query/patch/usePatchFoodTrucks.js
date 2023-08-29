import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function usePatchFoodTrucks({ id }) {
  const queryClient = useQueryClient();
  const { mutate, data, isLoading, error, isSuccess } = useMutation({
    mutationKey: ['patchFoodTruck'],
    mutationFn: async (data) => {
      const res = await axiosInstance.patch(`/api/foodtrucks${id}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['getFoodTrucks'],
      });
    },
  });

  return {
    patchFoodTruck: mutate,
    isLoading,
    isSuccess,
    error,
    data,
  };
}
